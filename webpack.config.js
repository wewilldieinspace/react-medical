const path = require('path')

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'index.js',
        path: path.join(__dirname, 'dist')
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.png$/,
                loader: 'file-loader'
            }
        ]
    },
    resolve: {
        extensions: [
            '.ts', '.js', '.tsx', '.json'
        ]
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: '4000',
        historyApiFallback: true,
        inline: true,
    }
}