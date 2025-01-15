// import 'tsx';
// import { createRequire } from 'module';

const { createServer } = require("http");

// // export const config = {
// //     runtime: 'nodejs',
// // };

// const require = createRequire(import.meta.url);

// const { setConfig } = require('../lib/config');
// setConfig({
//     NO_LOGFILES: true,
// });

// const { handle } = require('@hono/node-server/vercel');
// const { default: app } = await import('../lib/app');
// const { default: logger } = require('../lib/utils/logger');

// logger.info(`🎉 RSSHub is running! Cheers!`);
// logger.info('💖 Can you help keep this open source project alive? Please sponsor 👉 https://docs.rsshub.app/sponsor');



// export default handle(app);



export default createServer((req, res) => {
    res.writeHead(200, { "Content-Type": 'text/plain'})
    res.end('Hello RSSHub')
})
