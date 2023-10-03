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

Then, create a new instance of the Vapi class, passing your Client Token as a parameter to the constructor:

```javascript
const vapi = new Vapi('your-web-token');
```

You can start a new call by calling the `start` method and passing an `agent` object or `agentId`:

```javascript
vapi.start({
  context: "You are a shopping assistant...",
  voice: "steve",
  ...
});
```
```javascript
vapi.start('your-agent-id');
```

The `start` method will initiate a new call. 

You can stop the session by calling the `stop` method:

```javascript
vapi.stop();
```

This will stop the recording and close the connection.

## License

```
MIT License

Copyright (c) 2023 Vapi Labs Inc.

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
