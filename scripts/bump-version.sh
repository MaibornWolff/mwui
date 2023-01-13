#!/bin/sh
npm version $1

cd ./mwui-stencil
npm version $1

cd ../mwui-token-farm
npm version $1

cd ../mwui-angular
npm version $1

cd ../mwui-react
npm version $1

cd ../mwui-vue
npm version $1

