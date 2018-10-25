'use strict';

module.exports = appInfo => {

    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1540285220735_7079';

    // add your config here
    config.middleware = [];

    exports.view = {
        defaultViewEngine: 'nunjucks',
        mapping: {
            '.nj': 'nunjucks',
            '.html': 'nunjucks',
        },
    };

    return config;
};
