import "../../global/global.css";

export default {
  title: "Components/Textarea",
  component: "mw-textarea",
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
  "label": "",
  "placeholder": "",
  "helper-text": "",
  "has-error": false,
  "required": false,
  "readonly": false,
  "resize": "none",
  "maxlength": "100",
  "rows": "3",
  "cols": "50",
  "form": "formid",
};
