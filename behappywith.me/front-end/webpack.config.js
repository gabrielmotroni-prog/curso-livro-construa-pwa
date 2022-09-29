const webpack = require("webpack");
const htmlWebPackPlugin = require("html-webpack-plugin"); //mais rapido html - geracao automatica de html
const ExtractTextPlugin = require('extract-text-webpack-plugin'); //extrai css do react para  carregamento mais rapido
const path = require("path");

module.exports = {
  entry: path.join(__dirname, "src/index.jsx"), //aode webpack encontrara todos arquivos requisitados - a porta de entrada. Se nao tiver aqui n vai
  output: {
    path: path.join(__dirname, "dist"), // especificar diretorio final dos arquios compilados e minificados  serao salvos
    filename: "bundle.js", // agrupar.js - nome do arquivo padrao webpack
  },
  resolve: {
    extensions: [".js", ".jsx"], // para webpack ler jsx, mt comum no react
  },
  plugins: [
    new htmlWebPackPlugin({
      //mais rapido html - geracao automatica de html
      filename: "index.html", //html gerado pelo output do webpack
      template: path.join(__dirname, "src/index.html"), // template para copiar e acrescentar usado como base pelo webpack
    }),
   new ExtractTextPlugin('style.css')
  ],
  module: {
    //regras de transformacao - diversas regras tratando assuntos diferentes
    rules: [
      {  //plugins para webpack trabalhar com css
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        include: path.join(__dirname, "src"),
        use: [
          {                                                       
            loader: "babel-loader",
            options: {
              presets: ["es2015", "react"], // es2015 == es6
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|ico|png|gif|svg)$/i, //img ir para dist
        loader:'file-loader?name=img/[name].[ext]'
      }
    ],
  },
  devServer: {
    //informar ao web-pack-dev-server que o codigo final estara em dist
    publicPath: "/",
    contentBase: "./dist",
  },
};
