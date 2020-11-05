const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
	.BundleAnalyzerPlugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // installed via npm

const dirTpWebpack = path.resolve(__dirname)
const dirTpEcommerce = path.resolve(__dirname, '..', 'tp-ecommerce')

module.exports = {
	entry: path.resolve(dirTpWebpack, 'app/app.js'),
	output: {
		filename: 'app.js',
		path: path.resolve(dirTpWebpack, 'build'),
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				//exclude: /(node_modules)/,
				loader: 'babel-loader',
				options: {
					presets: ['@babel/env', '@babel/preset-react'],
					plugins: ['@babel/plugin-transform-react-jsx'],
				},
			},
			{
				test: /\.css$/,
				//exclude: /(node_modules)/,
				use: [
					MiniCssExtractPlugin.loader,
					{ loader: 'css-loader', options: { sourceMap: true } },
					//'style-loader',
				],
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
		],
	},
	plugins: [
		new BundleAnalyzerPlugin({
			analyzerMode: 'static',
			generateStatsFile: true,
		}),
		new MiniCssExtractPlugin(),
		new CleanWebpackPlugin(),
	],
}
