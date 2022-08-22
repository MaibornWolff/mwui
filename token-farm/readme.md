# The Liberation Machine - Token Farm

The Token Farm houses the exported tokens from the Figma design file and converts them into variables for our Stencil component library.

## Structure

**input** contains the raw json output files from the Figma design file. **src** cointains the script which turns these files into usable variables, which are generated in **dist**.

## Script

*WIP*

## Output types

*WIP*

## Workflow

The [update-tokens.yml](https://github.com/MaibornWolff/tlm-components/blob/f1e251d73e552d90f0c734b5e58b180c5bd5f96d/.github/workflows/update-tokens.yml) workflow executes the Token Farm script whenever a commit is pushed to the `main` branch. Afterwards the Stencil component library is rebuilt with the new tokens and the Storybook is updated.