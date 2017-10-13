const webpack = require('webpack')
const  path = require('path')

const externals = [
  'salesforce-lightning-cli/lib/aura-component-config',
  'salesforce-lightning-cli/lib/code-style-rules',
  'salesforce-lightning-cli/rules/aura-api',
  'salesforce-lightning-cli/rules/ecma-intrinsics',
  'salesforce-lightning-cli/rules/secure-document',
  'salesforce-lightning-cli/rules/secure-window',
].reduce((result, dep) => Object.assign(result, { [dep]: `commonjs2 ${ dep }` }), {})

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: { presets: ['env'] }
        },
        'eslint-loader',
        ]
      },
    ],
  },
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  target: 'node',
  resolve: {
    modules: ["node_modules"],
  },
  externals,
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
  ]
}
