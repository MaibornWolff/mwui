# The Liberation Machine - Setup Figma Tokens Studio

The component library uses Design Tokens connected via [Figma Tokens Studio](https://docs.tokens.studio/) to style the components based on a Figma file.

![Tokens Studio](https://docs.tokens.studio/header.png)

## Get started

Download the plugin from [here](https://www.figma.com/community/plugin/843461159747178978/Figma-Tokens) and initiate it in the Figma file which contains the design system. Under settings, select _GitHub_ as the token storage option. To sync your tokens with GitHub you will first have to enter your credentials. The following information is required:

**Your Name:** First and last name.

**Personal access token:** The plugin requires a token which is connected to your GitHub account (An account is required to use the plugin). You can create a token within the GitHub settings under Settings > Developer Settings > Tokens (classic) > Generate new token. Give the token a name and set its expiration date to 'No expiration'. The following boxes have to be checked for the plugin to work:

![image](https://user-images.githubusercontent.com/85286401/185928119-59c2ce2b-cc80-44a0-b629-70c38c184600.png)

Generate the access token and paste it into the plugin settings. _Do not share this token with anybody!_


**Repository:** MaibornWolff/mwui

**Default Branch:** main

**File Path:** mwui-token-farm/input/tokens.json

After saving the settings you can pull the tokens from GitHub using the button in the bottom left corner.

## Pushing to GitHub

After making changes to the Figma file (while using Design Tokens) you can push said changes to GitHub using the plugin.

> **Note**
> You can also push your changes to some other branch. It won't trigger automatic token transformation and storybook build though.

Click on the 'Push to GitHub' button in the bottom left corner. You have to enter a short message for every commit you push to GitHub. These messages should look like this:

```
figma-plugin: change border-radius of buttons to none
```

The message should be in English and serve as a quick description of what changes were made to the tokens. The 'figma-plugin: ' prefix makes it easier to understand which commits were made using the plugin.
