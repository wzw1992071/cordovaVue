var path = require('path')
const webpack = require('webpack')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const CompressionWebpackPlugin = require("compression-webpack-plugin");

function resolve(dir) {
   
    return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: false,

  configureWebpack:{
    mode:(process.env.NODE_ENV === 'production'||process.env.NODE_ENV === 'pre')?'production':'development',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        }
    },
    externals: {
      'CryptoJS': 'CryptoJS',
      'wx': 'wx'
    },
    plugins: [
      new webpack.DllReferencePlugin({
        context: process.cwd(),
        manifest: require('./public/vendor/vendor-manifest.json')
      }),
      new AddAssetHtmlPlugin({
        // dll文件位置
        filepath: path.resolve(__dirname, './public/vendor/*.js'),
        // dll 引用路径
        publicPath: './vendor',
        // dll最终输出的目录
        outputPath: './vendor'
      }),
      // new CompressionWebpackPlugin({
      //     filename: "[path].gz[query]",
      //     algorithm: "gzip",
      //     test: /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i,
      //     threshold: 10240,
      //     minRatio: 0.8
      // })
      
    ]
    // if (process.env.NODE_ENV === 'production'|| process.env.NODE_ENV === 'pre') {
    //     // 为生产环境修改配置...
    //     config.mode = 'production';
    // } else {
    //     // 为开发环境修改配置...
    //     config.mode = 'development';
    // }
    // Object.assign(config, {
    //     // 开发生产共同配置
    //     resolve: {
    //         alias: {
    //             '@': path.resolve(__dirname, './src'),
    //         }
    //     },
    //     externals: {
    //         'vue': 'Vue',
    //         'axios': 'axios',
    //         '_': '_',
    //         'CryptoJS': 'CryptoJS',
    //         'wx': 'wx'
    //     },
    // });
  },

  css: {
    loaderOptions: {
      sass: {
        data: '@import "~@/assets/css/variables.scss";'
      }
    }
  },

  devServer: {
    proxy: {
        '/api': {
            // target:'https://test.jichangzhuanxian.com',
            target:'https:///192.168.1.118:8080',
            ws: true,
            changOrigin: true,
            pathRewrite: {
                '^/api': ''
              }
        }
        
    }
  },

  
  outputDir: '../www',
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,
  publicPath:'./'
}
