const path = require('path');
const nodeExternals = require('webpack-node-externals');
const WebpackShellPlugin = require('webpack-shell-plugin');

const {NODE_ENV = 'production',} = process.env;

module.exports = {
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    mode: NODE_ENV,
    watch: NODE_ENV === 'development',
    testEnvironment: 'node',
    transform: {
        "^.+\\.ts$": "ts-jest"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    target: 'node',
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    externals: [nodeExternals()],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new WebpackShellPlugin({
            onBuildEnd: ['npm run:dev']
        })
    ]
};
