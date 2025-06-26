import fs from 'fs';

export default function vapiPlugin() {
  return {
    name: 'vite-plugin-vapi',
    transform(code, id) {
      if (id.includes('client-sdk-web/dist/vapi.js')) {
        const content = fs.readFileSync('/Users/adisai/client-sdk-web/dist/vapi.js', 'utf8');
        return {
          code: `
            import EventEmitter from 'events';
            import DailyJs from '@daily-co/daily-js';
            ${content.replace('exports.default =', 'export default')}
          `,
          map: null
        };
      }
    }
  };
}
