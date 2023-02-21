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

publish-integrations versionType:
  just publish-angular {{ versionType }}
  just publish-vue {{ versionType }}
  just publish-react {{ versionType }}

publish-angular versionType:
  just update-core #release-it {{ versionType }} --dry-run
  cd {{ angular }} && npm run build --configuration=production

  # npm i new version && just build angular && commit
  # npm publish --access-public

publish-vue versionType:
  cd {{ vue }} && release-it {{ versionType }} --dry-run

publish-react versionType:
  cd {{ react }} && release-it {{ versionType }} --dry-run

publish-token versionType:
  cd {{ tokenFarm }} && release-it {{ versionType }} --dry-run

update-core:
  cd {{ angular }} && npm i "@maibornwolff/mwui-stencil"
