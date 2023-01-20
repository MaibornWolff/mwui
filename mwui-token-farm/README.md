<img src="https://img.freepik.com/vektoren-kostenlos/herbstlandschaft-mit-scheunenfeld_107791-12992.jpg?w=2000&t=st=1674222809~exp=1674223409~hmac=1fc9f2995095acce97c16a35c10f402076d5ef45daf5f498916507f86b1b6090" alt="token-farm" align="center" height="200" >

# The Liberation Machine - Token Farm

[![npm](https://img.shields.io/npm/v/@maibornwolff/mwui-token-farm?color=blue)](https://www.npmjs.com/package/@maibornwolff/mwui-token-farm)

The Token Farm houses the exported tokens from the Figma design file and converts them into variables for our Stencil component library. It's based on [token-transformer](https://www.npmjs.com/package/token-transformer) package and [Style Dictionary](https://github.com/amzn/style-dictionary).

## Structure

**input** contains the raw json output files from the Figma design file. **src** cointains the script which turns these files into usable variables, which are generated in **dist**.

## Output types

The Token Farm can be configured to output various different file types, such as JavaScript, TypeScript, json, css and scss in `build.ts`. It can also create several output files for different themes.

## Workflow

The [main-build.yml](https://github.com/MaibornWolff/mwui/blob/f1e251d73e552d90f0c734b5e58b180c5bd5f96d/.github/workflows/main-build.yml) workflow executes the Token Farm script whenever a commit is pushed to the `main` branch. Afterwards the Stencil component library is rebuilt with the new tokens and the Storybook is updated.

## Using the tokens in the Stencil Library

To use the exported tokens, add the following line to a component:

```TypeScript
import { tokenName } from '../../../mwui-token-farm/dist/js/global';
```

You can then reference the tokens using Emotion, a CSS-in-JS package.

```JavaScript
import { css } from '@emotion/css';

const componentStyle = css`
  css-attribute: ${tokenName};
`;

...

export class MwComponent {
  render() {
    return (
      <div class={componentStyle}></div>
    );
  }
}
```
