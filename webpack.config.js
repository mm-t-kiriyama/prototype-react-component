const path = require('path');
const glob = require('glob');

const entries = glob.sync('./packages/**/index.ts');

module.exports = {
    mode: 'development',
    entry: entries,
    output: {
        filename: 'index.js',
        path: path.join(__dirname, 'dist'),
        libraryTarget: 'commonjs2',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modeules/,
                use: [
                    'ts-loader',
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
}