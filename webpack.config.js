
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './src/app.jsx',
	output: {
		path: path.resolve(__dirname, 'dist'), //把檔案輸出到根目錄dist下
		publicPath:'/dist/',  //檔案上線時，前面要上 /dist/ 字斷
		filename: 'js/app.js' //打包後要生成的名稱
	},
  	devServer: { 
     	port:8086
   	},

	module: {
	  	rules: [
	  		// react語法處理
		    {
		      	test: /\.jsx$/,
		      	exclude: /(node_modules)/,
			      	use: {
			        loader: 'babel-loader',
			        options: {
			          	presets: ['env','react']
			        }
		      	}
		    },
		    // css語法處理
		    {
		        test: /\.css$/,
		        use: ExtractTextPlugin.extract({
		          	fallback: "style-loader",
		          	use: "css-loader"
		        })
      		},
      		// scss語法處理
      		{
		        test: /\.scss$/,
		        use: ExtractTextPlugin.extract({
		          	fallback: 'style-loader',
		         	use: ['css-loader', 'sass-loader']
	        	})
      		},
      		// 圖片處理
      		{
		        test: /\.(png|jpg|gif)$/,
		        use: [
		          	{
		            	loader: 'url-loader',
		            	options: {
		              		limit: 8192,
		              		name : 'resource/[name].[ext]'// 打包後，放置路徑，[name]圖片名子
		           		}
		          	}
		        ]
	      	},
	      	// 文字圖標處理
	      	{
		        test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
		        use: [
		          	{
		            	loader: 'url-loader',
		            	options: {
		              		limit: 8192,
		              		name : 'resource/[name].[ext]'// 打包後，放置路徑，[name]圖片名子
		           		}
		          	}
		        ]
	      	}		
		]
	},
	plugins: [
		// 可自己配置模板，或其他設定
		// 默認的輸出就是dist下的index.html
		new HtmlWebpackPlugin({
			template:'./src/index.html'
		}),
		//  獨立css模塊
		new ExtractTextPlugin("css/[name].css"), // 打包後，放置路徑，css文件匣中
		//  提出公用模塊
		new webpack.optimize.CommonsChunkPlugin({
			name : 'common',
			filename : 'js/base.js' // 打包後，放置路徑，js文件匣中
		})
	],

};