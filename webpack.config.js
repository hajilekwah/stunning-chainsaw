module.exports = {
/*
FYI, removed:
    "babel-loader": "^8.2.2",
    "babel-preset-es2015": "^6.24.1",

    from package.json in order to keep package.json simple as possible. If something bad happens
    Try adding these back.
*/

    mode: 'development',
    entry: "./app/js/main.js",
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react', '@babel/preset-env']
                }
            }
        ]
    }
}