
const path = require('path');

function resolve (dir) {
    return path.join(__dirname, '.', dir);
}

module.exports = {
	entry: {
        'main': './src/main.js'
	},
	output: {
		path: resolve('dist'),
		filename: './js/main.js'
	},
	module: {
		rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: resolve('src')
            },
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			}
		],

	},
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@':  resolve('src')
        }
    },
	devServer: {
		hot: true,
		port: 8080,
        contentBase: path.resolve('dist'),
        publicPath: "/",
	},

	watch: true
};