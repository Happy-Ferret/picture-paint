const config = {
    entry: {
        background: './src/background.js',
        popup: './src/popup.js'
    },
    devtool: 'inline-source-map',
    output: {
        filename: '[name].js',
        path: __dirname + '/extension/js'
    }
};

module.exports = config;
