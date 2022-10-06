#!/bin/sh
cd ./tlm-stencil
npm publish

cd ../tlm-angular
npm i tlm-stencil@latest
npm publish

cd ../tlm-vue
npm i tlm-stencil@latest
npm publish

cd ../tlm-react
npm i tlm-stencil@latest
npm publish

