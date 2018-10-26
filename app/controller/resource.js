'use strict';

const Controller = require('egg').Controller;

class ResourceController extends Controller {
    async upload() {
        await this.ctx.render('index.njk', {
            username: 'new',
        });
    }
}

module.exports = ResourceController;
