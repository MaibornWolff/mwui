#!/bin/sh
echo "Committing package.json updates."

git add .
git commit -m "bump tlm-stencil version after npm publish"
git push

echo "Publish component integrations"

cd ../tlm-angular
npm publish

cd ../tlm-vue
npm publish

cd ../tlm-react
npm publish
