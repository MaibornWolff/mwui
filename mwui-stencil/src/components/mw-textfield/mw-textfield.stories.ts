import docs from "./mw-textfield.docs.mdx";

export default {
  title: "Components/Textfield",
  component: "mw-textfield",
  tags: ["autodocs"],
  parameters: {
    docs: { page: docs },
  },
  argTypes: {
    value: {
      description: "Input value",
      control: {
        type: "text",
        default: null,
      },
    },
  },
};

const DefaultTemplate = args => `
<mw-textfield
  test-id="${args.testId}"
  disabled="${args.disabled}"
  type="${args.type}"
  value="${args.value}"
  name="${args.name}"
  label="${args.label}"
  placeholder="${args.placeholder}"
  helper-text="${args["helper-text"]}"
  has-error="${args["has-error"]}"
  required="${args.required}"
  layout="${args.layout}"
>
</mw-textfield>`;

export const Default = DefaultTemplate.bind({});
Default.args = {
  "testId": "textfield",
  "value": "",
  "disabled": false,
  "type": "text",
  "name": "test-input",
  "label": "",
  "placeholder": "",
  "helper-text": "",
  "has-error": false,
  "required": false,
  "layout": "vertical",
};

export const Label = DefaultTemplate.bind({});
Label.args = {
  "testId": "textfield",
  "value": "",
  "disabled": false,
  "type": "text",
  "name": "test-input",
  "label": "Input Label",
  "placeholder": "",
  "helper-text": "",
  "has-error": false,
  "required": false,
  "layout": "vertical",
};

export const Placeholder = DefaultTemplate.bind({});
Placeholder.args = {
  "testId": "textfield",
  "value": "",
  "disabled": false,
  "type": "text",
  "name": "test-input",
  "label": "",
  "placeholder": "Type something...",
  "helper-text": "",
  "has-error": false,
  "required": false,
  "layout": "vertical",
};

export const HelperText = DefaultTemplate.bind({});
HelperText.args = {
  "testId": "textfield",
  "value": "",
  "disabled": false,
  "type": "text",
  "name": "test-input",
  "label": "",
  "placeholder": "Type something...",
  "helper-text": "helper text",
  "has-error": false,
  "required": false,
  "layout": "vertical",
};

export const ErrorState = DefaultTemplate.bind({});
ErrorState.args = {
  "testId": "textfield",
  "value": "wrong input",
  "disabled": false,
  "type": "text",
  "name": "test-input",
  "label": "",
  "placeholder": "Type something...",
  "helper-text": "error text",
  "has-error": true,
  "required": false,
  "layout": "vertical",
};

export const Required = DefaultTemplate.bind({});
Required.args = {
  "testId": "textfield",
  "value": "",
  "disabled": false,
  "type": "text",
  "name": "test-input",
  "label": "Name",
  "placeholder": "",
  "helper-text": "",
  "has-error": false,
  "required": true,
  "layout": "vertical",
};

export const Horizontal = DefaultTemplate.bind({});
Horizontal.args = {
  "testId": "textfield",
  "value": "Some value",
  "disabled": false,
  "type": "text",
  "name": "test-input",
  "label": "Name",
  "placeholder": "",
  "helper-text": "helper text",
  "has-error": false,
  "required": true,
  "layout": "horizontal",
};

const IconStartTemplate = args => `
<mw-textfield
  test-id="${args.testId}"
  disabled="${args.disabled}"
  type="${args.type}"
  value="${args.value}"
  name="${args.name}"
  label="${args.label}"
  placeholder="${args.placeholder}"
  helper-text="${args["helper-text"]}"
  has-error="${args["has-error"]}"
  required="${args.required}"
  layout="${args.layout}"
>
  <mw-icon icon="search" slot="icon-start"></mw-icon>
</mw-textfield>`;

export const WithIconStart = IconStartTemplate.bind({});
WithIconStart.args = {
  "testId": "textfield",
  "value": "Some value",
  "disabled": false,
  "type": "text",
  "name": "test-input",
  "label": "Name",
  "placeholder": "",
  "helper-text": "helper text",
  "has-error": false,
  "required": true,
  "layout": "vertical",
};

const IconEndTemplate = args => `
<mw-textfield
  test-id="${args.testId}"
  disabled="${args.disabled}"
  type="${args.type}"
  value="${args.value}"
  name="${args.name}"
  label="${args.label}"
  placeholder="${args.placeholder}"
  helper-text="${args["helper-text"]}"
  has-error="${args["has-error"]}"
  required="${args.required}"
  layout="${args.layout}"
>
  <mw-icon icon="search" slot="icon-end"></mw-icon>
</mw-textfield>`;

export const WithIconEnd = IconEndTemplate.bind({});
WithIconEnd.args = {
  "testId": "textfield",
  "value": "Some value",
  "disabled": false,
  "type": "text",
  "name": "test-input",
  "label": "Name",
  "placeholder": "",
  "helper-text": "helper text",
  "has-error": false,
  "required": true,
  "layout": "vertical",
};

const IconStartEndTemplate = args => `
<mw-textfield
  test-id="${args.testId}"
  disabled="${args.disabled}"
  type="${args.type}"
  value="${args.value}"
  name="${args.name}"
  label="${args.label}"
  placeholder="${args.placeholder}"
  helper-text="${args["helper-text"]}"
  has-error="${args["has-error"]}"
  required="${args.required}"
  layout="${args.layout}"
>
  <mw-icon icon="search" slot="icon-start"></mw-icon>
  <mw-icon icon="close" slot="icon-end"></mw-icon>
</mw-textfield>`;

export const WithIconBoth = IconStartEndTemplate.bind({});
WithIconBoth.args = {
  "testId": "textfield",
  "value": "Some value",
  "disabled": false,
  "type": "text",
  "name": "test-input",
  "label": "Name",
  "placeholder": "",
  "helper-text": "helper text",
  "has-error": false,
  "required": true,
  "layout": "vertical",
};
