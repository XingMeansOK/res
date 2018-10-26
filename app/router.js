'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    // 获取首页
    router.get( '/', controller.home.index );
    // 上传接口
    router.post( '/resource', controller.resource.upload )
};
