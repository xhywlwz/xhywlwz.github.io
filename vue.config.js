module.exports = {
    publicPath: './',
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true
            }
        }
    },
    outputDir:"dist", //打包后的项目目录名称
    devServer:{
        host: '0.0.0.0',
        port:8888
    }
}