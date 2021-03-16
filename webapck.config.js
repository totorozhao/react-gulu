const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        index: './lib/index.tsx'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, 'dist/lib'),
        filename: 'lib.js',
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'awesome-typescript-loader'
        }],
    },
    plugins: [new HtmlWebpackPlugin({ template: 'index.html' })]
}