# MWUI - Token Farm

The Token Farm houses the exported tokens from the Figma design file and converts them into variables for our Stencil component library.

## Structure

**input** contains the raw json output files from the Figma design file. **src** cointains the script which turns these files into usable variables, which are generated in **dist**.

## Output types

The Token Farm can be configured to output various different file types, such as JavaScript, TypeScript, json, css and scss in `build.ts`. It can also create several output files for different themes.

## Workflow

The [update-tokens.yml](https://github.com/MaibornWolff/mwui/blob/f1e251d73e552d90f0c734b5e58b180c5bd5f96d/.github/workflows/update-tokens.yml) workflow executes the Token Farm script whenever a commit is pushed to the `main` branch. Afterwards the Stencil component library is rebuilt with the new tokens and the Storybook is updated.

## Using the tokens in the Stencil Library

To use the exported tokens, add the following line to a component:

```TypeScript
import { tokenName } from '../../../token-farm/dist/js/global';
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
