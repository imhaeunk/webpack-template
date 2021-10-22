const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = (env, options) => {
  console.log(env, options)
  return {
    resolve: {
      extensions: ['.js'],
      alias: {
        'herop~': path.resolve(__dirname, 'src') 
        //src라는 폴더경로 별칭 지정
      }
    },
    entry: './src/main.js',
    output: {
      //path: '',
      //filename: '',
      publicPath: '/', //경로 설정.
      clean: true //dist 폴더를 깨끗하게 정리하고 다시 생성해라.
    },
    module: {
      rules: [
        {
          test: '/\.js$/', //js확장자를 가진 파일
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.s?css$/,
          use:[
            'style-loader',
            'css-loader',
            'postcss-loader', //후처리 
            'sass-loader'
          ]
        }
      ]
    },
    plugins:[
      new HtmlPlugin({
        template: './src/index.html'
      }),
      new CopyPlugin({
        patterns:[
          { from: 'static' },
        ]
      })
    ],
    devServer: {
      //port: 8080, 기본값
      // open: true,true는 자동으로 브라우저 열림. 기본값
      //historyApiFallback: true <--- 윈도우에 history객체를 통해서 라우터에 히스토리 모드를 켤때 필요
    }
  }
}