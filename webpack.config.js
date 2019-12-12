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
            filename: isProduction ? 'react-uikit.min.js' : 'react-uikit.js',
            libraryTarget: 'umd',
            library: 'ReactUIKit'
        },
        externals: {
            react: 'react',
            'react-dom': 'ReactDOM',
            // tslib: 'tslib',
            // '@emotion/core': '@emotion/core',
            // "@emotion/styled": "@emotion/styled",
            // "emotion-theming": "emotion-theming",
            // "styled-system": "styled-system",
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.json'],
            modules: [path.resolve(__dirname, 'src'), 'node_modules']
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
        plugins: isProduction ? [
            new CleanWebpackPlugin(),
            new CopyWebpackPlugin([
                { from: './README.md' },
                { from: './package.json' }
            ])
        ] : []
    };
};
