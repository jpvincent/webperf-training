const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
	.BundleAnalyzerPlugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // installed via npm

const dirTpWebpack = path.resolve(__dirname)
const dirTpEcommerce = path.resolve(__dirname, '..', 'tp-ecommerce')

module.exports = {
	entry: { app: path.resolve(dirTpWebpack, 'app/app.js') },
	mode: 'production', // mode par défaut. Autre valeur : 'development'
	devtool: 'source-map', // important pour s'aider au debug
	resolve: {
		// profiling React (https://gist.github.com/bvaughn/25e6233aeb1b4f0cdb8d8366e54a3977)
		alias: {
			'react-dom': 'react-dom/profiling',
			'scheduler/tracing': 'scheduler/tracing-profiling',
		},
	},
	output: {
		filename: '[name].js',
		path: path.resolve(dirTpWebpack, 'build'),
		publicPath: '/tp-webpack/build/',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				//exclude: /(node_modules)/,
				loader: 'babel-loader',
				options: {
					presets: ['@babel/env', '@babel/preset-react'],
					plugins: [
						'@babel/plugin-transform-react-jsx',
						'@babel/plugin-proposal-class-properties',
					],
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
