const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, { mode }) => {
    const isProduction = mode === 'production';

    return {
        devtool: isProduction ? 'hidden-source-map' : 'cheap-module-source-map',
        entry: './src/index.ts',
        output: {
            path: path.resolve('./dist'),
            filename: 'react-uikit.min.js',
            libraryTarget: 'umd',
            library: 'ReactUIKit'
        },
        externals: {
            react: 'React',
            'react-dom': 'ReactDOM'
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.json']
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    loader: 'ts-loader'
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new CopyWebpackPlugin([
                { from: './README.md' },
                { from: './package.json' }
            ])
        ]
    };
};
