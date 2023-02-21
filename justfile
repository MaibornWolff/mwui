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

update-core integration:
  cd {{ integration }} && npm i "@maibornwolff/mwui-stencil@latest"

build integration:
  cd {{ integration }} && npm run build

publish versionType:
  release-it {{ versionType }} --dry-run

publish-integrations versionType:
  just publish-angular {{ versionType }}
  just publish-vue {{ versionType }}
  just publish-react {{ versionType }}

publish-integration integration versionType:
  just update-core {{ integration }}
  just build {{ integration }}

  git add . && git commit -m "chore: build integration {{ integration }}"
  cd {{ integration }} && release-it {{ integration }} --dry-run

# publish-token versionType:
#   just update-core {{ tokenFarm }}
#   cd {{ tokenFarm }} && release-it {{ versionType }} --dry-run


