module.exports = {
	entry: './src/app.js',
	output: {
		path: __dirname+'/dist',
		filename: 'bundle.js'
	},
	module:{
		loaders:[
			{
				test: /\.js$/, 
				loader: 'babel-loader', 
				exclude: /node_modules/, 
				query:{presets:['es2015']}
			}
		]
	}
}