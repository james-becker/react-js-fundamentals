
/* create a new instance of HTMLWebpackPlugin and specify:

1. template of what we want the newly created file to look like
2. Filename, or what the new file is going to be called
3. Where to inject the script
*/

var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/app/index.html',//regular index.html file in app dir
	filename: 'index.html',// keep the name index.html
	inject: 'body'//inject a script referencing name of output file (index_bundle.js)
});

// define our module exports
module.exports = {
	entry: [
		'./app/index.js'
	],
	module: {
		loaders: [
			{test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
		]
	},
	output: {
		filename: 'index_bundle.js',
		path: __dirname + '/dist'
	},
	plugins: [HTMLWebpackPluginConfig]// Add HTMLWebpackPluginConfig
}