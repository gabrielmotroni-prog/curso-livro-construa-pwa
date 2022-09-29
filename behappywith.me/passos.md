##
npm install --save react@15.6.1 react-dom@15.6.1

npm install --save-dev babel-core@6.25.0 babel-preset-es2015@6.24.1 babel-preset-react@6.24.1  babel-loader@7.1.0

##
npm i --save-dev webpack@3.0.0 webpack-dev-server@2.5.0

## 
rodar webpack server dev:
1. node_modules/webpack-dev-server/bin/webpack-dev-server.js
2. servidor roda em http://localhost:8080/

##
npm i --save-dev- html-webpack-plugin@2.29.0

## comando para compilar para pasta dist
node_modules/webpack/bin/webpack.js

## fileload para o webpack compilar(na vdd copia) img de src para dist
npm install --save-dev file-loader@0.11.2

## download pure css
https://unpkg.com/purecss@1.0.0/build/pure-min.css

# plugin webpack para ele ler css - pg 126 e 127
❯ npm install --save-dev style-loader@0.18.2 css-loader@0.28.4

# pluginn que extrai css do react - pra n misturar com js evitando ficar lento
 npm install --save-dev extract-text-webpack-plugin@2.1.2




# inciar aplicacao
`` npm start``
# coloca arquivo compiilados na pasta dist 
`` npm build``
