#!/bin/sh
npm version $1

cd ./tlm-stencil
npm version $1

cd ../tlm-angular
npm version $1

cd ../tlm-react
npm version $1

cd ../tlm-vue
npm version $1

