const fs = require("fs");
const template = require("lodash.template");
const typingsES6Template = template(fs.readFileSync("src/templates/typings/es6.template"));

export const typingsES6Format = {
    name: "typings/es6",
    formatter: typingsES6Template,
};
