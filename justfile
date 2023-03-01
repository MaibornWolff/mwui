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
  cd {{ stencil }} && npm run build -- --watch & npm run storybook -- --watch

update-core integration:
  cd {{ integration }} && npm i "@maibornwolff/mwui-stencil@latest"

build integration:
  cd {{ integration }} && npm run build

publish versionType:


  just publish-integrations {{ versionType }}

publish-core versionType:
  just build {{ stencil }}
  git add . && git commit -m "chore: build {{ stencil }} integration"
  cd {{ stencil }} && npm run release -- {{ versionType }} --ci

publish-integration integration versionType:
  just update-core {{ integration }}
  just build {{ integration }}

  git add . && git commit -m "chore: build {{ integration }} integration"
  cd {{ integration }} && npm run release -- {{ versionType }} --ci

publish-integrations versionType:
  just publish-integration {{ angular }} {{ versionType }}
  just publish-integration {{ vue }} {{ versionType }}
  just publish-integration {{ react }} {{ versionType }}
  just publish-integration {{ tokenFarm }} {{ versionType }}
