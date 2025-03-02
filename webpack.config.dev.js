const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.common')
const ESLintPlugin = require('eslint-webpack-plugin');
const openBrowser = require('react-dev-utils/openBrowser');

module.exports = merge(commonConfig, {
    mode: 'development',
    devServer: {
        port: 3000,
        open: false,
        onListening: function (devServer) {
            const { port } = devServer.server.address();
            openBrowser(`http://localhost:${port}`);
        },
    },
    plugins: [new ESLintPlugin()],
});
