const path = require('path');
const clearModule = require('clear-module');
const moduleAlias = require('module-alias');
moduleAlias.addAlias('@', path.join(__dirname, '../lib'));

const config = require('../lib/config');
config.set({
    NO_LOGFILES: true,
});

module.exports = (req, res) => {
    clearModule('../lib/app');
    const app = require('../lib/app');
    app.callback()(req, res);
};
