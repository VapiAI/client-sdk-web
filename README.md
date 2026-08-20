# Vapi Web SDK

This package lets you start Vapi calls directly in your webapp.

## Installation

You can install the package via npm:

```bash
npm install @vapi-ai/web
```

## Usage

First, import the Vapi class from the package:

```javascript
import Vapi from '@vapi-ai/web';
```

Then, create a new instance of the Vapi class, passing your Public Key as a parameter to the constructor:

```javascript
const vapi = new Vapi('your-public-key');
```

You can start a new call by calling the `start` method and passing an `assistant` object or `assistantId`:

```javascript
vapi.start({
  model: {
    provider: "openai",
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: "You are an assistant.",
      },
     ],
   },
   voice: {
    provider: "11labs",
    voiceId: "burt",
  },
  ...
});
```

```javascript
vapi.start('your-assistant-id');
```

The `start` method will initiate a new call.

You can override existing assistant parameters or set variables with the `assistant_overrides` parameter.
Assume the first message is `Hey, {{name}} how are you?` and you want to set the value of `name` to `John`:

```javascript
const assistantOverrides = {
  recordingEnabled: false,
  variableValues: {
    name: 'John',
  },
};

vapi.start(
  'your-assistant-id',
  assistantOverrides,
);
```

You can send text messages to the assistant aside from the audio input using the `send` method and passing appropriate `role` and `content`.

```javascript
vapi.send({
  type: 'add-message',
  message: {
    role: 'system',
    content: 'The user has pressed the button, say peanuts',
  },
});
```

Possible values for the role are `system`, `user`, `assistant`, `tool` or `function`.

You can stop the session by calling the `stop` method:

```javascript
vapi.stop();
```

This will stop the recording and close the connection.

The `setMuted(muted: boolean)` can be used to mute and un-mute the user's microphone.

```javascript
vapi.isMuted(); // false
vapi.setMuted(true);
vapi.isMuted(); // true
```

The `say(message: string, endCallAfterSpoken?: boolean)` can be used to invoke speech and gracefully terminate the call if needed

```javascript
vapi.say("Our time's up, goodbye!", true)
```

The `setVolume(volume: number)` controls how loudly the assistant plays, from
`0` to `1`. This is playback only: it does not change what the assistant hears,
and it does not affect the levels reported by the `volume-level` event.

```javascript
vapi.setVolume(0.5);
```

The setting is remembered, so you can call it before a call has started and it
will be applied as soon as the assistant's audio arrives. It also persists
across calls, so a volume your user picked once is not reset by hanging up.
Values outside `0` to `1` are clamped, and non-finite values are ignored.

The `getAudioPlayer()` returns the `<audio>` element the SDK uses to play the
assistant, or `null` before its track has arrived. Use it for anything the
setter doesn't cover, such as driving a waveform visualizer.

```javascript
const player = vapi.getAudioPlayer();
```

Pair it with the `audio` event when you need the element the moment it exists:

```javascript
vapi.on('audio', (player) => {
  // e.g. new AudioContext().createMediaElementSource(player)
});
```

If the browser blocks playback, usually its autoplay policy when the call was
not started from a user gesture, no player is attached and an `error` is
emitted instead. Listen for it to prompt the user:

```javascript
vapi.on('error', (e) => {
  if (e.type === 'audio-start-failed') {
    // show a "tap to enable audio" affordance
  }
});
```

## Recording

When video recording is enabled on the call's artifact plan, Vapi starts a recording automatically when the call begins. When the server provides a meeting token for the call (`call.transport.callToken`), the SDK joins with it and Daily auto-starts the cloud recording, which is more reliable on weak networks. Otherwise the SDK starts the recording from the client after joining. Recording start is asynchronous: success is signaled by the `recording-started` event and failure by the `recording-error` event.

A failed recording start is not retried automatically. Use `startRecording()` and `stopRecording()` to control the recording yourself. For example, to retry after a failure:

```javascript
vapi.on('recording-error', (e) => {
  console.error('Recording failed', e);
  // Retry after a short delay
  setTimeout(() => vapi.startRecording(), 5000);
});
```

## Events

You can listen to the following events:

```javascript
vapi.on('speech-start', () => {
  console.log('Speech has started');
});

vapi.on('speech-end', () => {
  console.log('Speech has ended');
});

vapi.on('call-start', () => {
  console.log('Call has started');
});

vapi.on('call-end', () => {
  console.log('Call has stopped');
});

vapi.on('volume-level', (volume) => {
  console.log(`Assistant volume level: ${volume}`);
});

// The <audio> element playing the assistant, as soon as it exists
vapi.on('audio', (player) => {
  console.log(`Assistant audio attached at volume ${player.volume}`);
});

// Function calls and transcripts will be sent via messages
vapi.on('message', (message) => {
  console.log(message);
});

vapi.on('error', (e) => {
  console.error(e);
});
```

These events allow you to react to changes in the state of the call or speech.

## License

```
MIT License

Copyright (c) 2024 Vapi Labs Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
