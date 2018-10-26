/**
 * 上传
 * */
function upload(cb) {
    var reversion = 0;
    if (config['reversion'] && config['reversion']['available']) {
        reversion = '1';
    }
    var projectDir = path.dirname(config.gulpfile);
    var manifestPath = path.resolve(process.cwd(), './dist/manifest.json');
    var manifest = require(manifestPath);
    manifest = JSON.stringify(manifest);

    var formData = {
        file: fs.createReadStream(path.join(process.cwd(), ouputFileName)),
        remotePath: remotePath,
        project: config['projectName'],
        tag: config['reversion']['tag'] || '',
        manifest: manifest,
        user: config.rtx,
        includeHtml: includeHtml,
        reversion: reversion
    };

    request.post({
        url: 'http://wxres.oa.com/upload/cdn',
        formData: formData
    }, function optionalCallback(err, httpResponse, body) {
        if (err) {
            return console.error('upload failed:', err);
        }

        body = JSON.parse(body);

        //解压完成后删除压缩包
        del([path.join(process.cwd(), ouputFileName)], {force: true});

        if (body.errCode !== 0) {
            console.error(body.errMsg);
            return cb();
        }

        util.log('上传成功');
        cb();

    });

}