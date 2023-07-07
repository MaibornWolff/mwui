import docs from "./mw-textarea.docs.mdx";
import "../../global/global.css";

export default {
  title: "Components/Textarea",
  component: "mw-textarea",
  tags: ["autodocs"],

  parameters: {
    docs: { page: docs },
  },
  argTypes: {
    value: {
      description: "Input value",
      control: {
        default: null,
      },
    },
  },
};

const DefaultTemplate = args => `
<mw-textarea
  disabled="${args.disabled}"
  value="${args.value}"
  name="${args.name}"
  label="${args.label}"
  placeholder="${args.placeholder}"
  helper-text="${args["helper-text"]}"
  has-error="${args["has-error"]}"
  required="${args.required}"
  cols="${args.cols}"
  rows="${args.rows}"
  readonly="${args.readonly}"
  resize="${args.resize}"
  maxlength="${args.maxlength}"
  form="${args.form}"
>
</mw-textarea>`;

export const Default = DefaultTemplate.bind({});
Default.args = {
  "testId": "textarea",
  "value": "",
  "disabled": false,
  "name": "test-input",
  "label": "Label",
  "placeholder": "Type something...",
  "helper-text": "helper/error text",
  "has-error": false,
  "required": true,
  "readonly": false,
  "resize": "both",
  "maxlength": "100",
  "rows": "3",
  "cols": "50",
  "form": "formid",
};
