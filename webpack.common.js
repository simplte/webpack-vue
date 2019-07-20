const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const extractTextWebpackPlugin = require('extract-text-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  entry: {
    app: './src/index.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'webpackpro',
      minify: { //对html文件进行压缩
        removeAttrbuteQuotes: true // 去掉属性的引号
        },
        hash: true, //js会存在缓存，打开hash避免饮用的js存在缓存
        template: './src/index.html' // 打包html模板路径和文件名称
    }),
    new extractTextWebpackPlugin("css/index.css"),
    new VueLoaderPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules:[
      //css loader
      {
        test:/\.css$/,
        use: extractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use:'css-loader'
        })
        // use:[
        //  {loader:'style-loader'},
        //  {loader:'css-loader'}
        // ]
      },
      {
                test: /\.less$/,
                use: [{
                       loader: "style-loader" // creates style nodes from JS strings
                    }, 
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    },
                    {
                        loader: "less-loader" // compiles Less to CSS
                    }]
            },
            {
               test: /\.scss$/,
               use: [{
                   loader: "style-loader" // creates style nodes from JS strings
               }, {
                   loader: "css-loader" // translates CSS into CommonJS
               }, {
                   loader: "sass-loader" // compiles Sass to CSS
               }]
           },
      {
        test:/\.(jsx|js)$/,
        use:{
          loader:'babel-loader'
        },
        exclude:/node_modules/
      },
      {test:/\.vue$/,use:'vue-loader'},
      {
        test:/\.(png|jpg|gif|jpeg|svg|ttf)/,  //是匹配图片文件后缀名称
        use:{
          loader:'url-loader',
          options: {
            name: '[name]_[hash].[ext]'
          }
        }
      }
    ]
  },
  resolve:{
    
  }
};