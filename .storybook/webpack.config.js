const path = require('path');

module.exports = ({ config }) => {
    config.module.rules.push(
        {
            test: /\.tsx?$/,
            use: [
                {
                    loader: require.resolve('ts-loader'),
                    options: {
                        configFile: path.join(__dirname, 'tsconfig.json')
                    }
                }
            ],
            include: [path.resolve(__dirname, '../src')]
        },
        {
            test: /\.stories\.tsx?$/,
            use: [
                {
                    loader: require.resolve('@storybook/source-loader'),
                    options: { parser: 'typescript' }
                }
            ],
            enforce: 'pre',
            include: [path.resolve(__dirname, '../src')]
        }
    );

    config.resolve.modules = [
        ...(config.resolve.modules || []),
        path.resolve('./src')
    ];

    config.resolve.extensions.push('.ts', '.tsx');

    return config;
};
