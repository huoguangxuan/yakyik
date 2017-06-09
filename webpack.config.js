var webpack = require('webpack')
var path = require('path')

module.exports = {
	entry:{
		app:'./src/app.js'
	},
	output:{
		filename:'public/build/bundle.js',
		sourceMapFilename:'public/build/bundle.map'
	},
	devtool:'#source-map',
	// resolve: {
 //        extensions: ['', '.js', '.jsx']
 //    },
	module:{
		rules:[
		{
			test:/\.js|jsx$/,
			exclude:/(node_modules)/,
			use: [{
		        loader: 'babel-loader',
		        options: {
		         presets: ['react','es2015'],
		        }
		    }]	
		}
			
		]
	}
}