stencil := "mwui-stencil"
react := "mwui-react"
angular := "mwui-angular"
vue := "mwui-vue"
tokenFarm := "mwui-token-farm"

# Install required deps
install:
  npm install && husky install

# Build tokens then run stencil & storybook in watch mode
dev:
  cd {{ tokenFarm }} && npm run build
  cd {{ stencil }} && npm run build -- --watch &
  npm run storybook -- --watch

publish versionType:
  release-it {{ versionType }} --dry-run

publish-stencil versionType:
  cd {{ stencil }} && release-it {{ versionType }} --dry-run
