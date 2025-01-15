import 'tsx';
import { createRequire } from 'module';

export const runtime = 'nodejs';

const require = createRequire(import.meta.url);

const { setConfig } = require('../lib/config');
setConfig({
    NO_LOGFILES: true,
});

const { handle } = require('hono/vercel');
const { default: app } = await import('../lib/app');
const { default: logger } = require('../lib/utils/logger');

logger.info(`🎉 RSSHub is running! Cheers!`);
logger.info('💖 Can you help keep this open source project alive? Please sponsor 👉 https://docs.rsshub.app/sponsor');

export const GET = handle(app);
