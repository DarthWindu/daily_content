var config = require('config');

/**
 * Returns the config.
 * If you're hosting your configuration on an external source (i.e. a server, different filepath), configure this function appropriately.
 */
module.exports = function () {
    return config;
}