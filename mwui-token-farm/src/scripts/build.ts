import { Config, Format, Named, Transform } from "style-dictionary";
import * as StyleDictionary from "style-dictionary";
import * as log from "log-beautify";
import { FORMATS } from "./formats";
import { TRANSFORMS } from "./transforms";
import { createArray } from "../utils/utils";

const baseTransforms = ["attribute/cti", ...TRANSFORMS.map(transform => transform.name)];
const jsTransforms = baseTransforms.concat(["name/cti/camel"]);
const scssTransforms = baseTransforms.concat(["name/cti/kebab"]);
const cssTransforms = ["name/cti/kebab", "append/px", "percent/px", "fontWeight/number"];

const getStyleDictionaryConfig = (theme: string): Config => {
    return {
        source: [`input/${theme}.json`],
        format: {
            createArray,
        },
        platforms: {
            css: {
                transformGroup: "css",
                buildPath: "dist/css/",
                files: [
                    {
                        destination: `index.css`,
                        format: "utilityClass",
                    },
                ],
            },
            scss: {
                transformGroup: "css",
                transforms: scssTransforms,
                buildPath: "dist/scss/",
                files: [
                    {
                        destination: `${theme}.scss`,
                        format: "scss/variables",
                    },
                ],
            },
            cssVariables: {
                transformGroup: "css",
                buildPath: "dist/css/",
                transforms: cssTransforms,
                files: [
                    {
                        destination: `${theme}.css`,
                        format: "css/variables",
                    },
                ],
            },
            ts: {
                transformGroup: "js",
                transforms: jsTransforms,
                buildPath: "dist/js/",
                files: [
                    {
                        destination: `${theme}.js`,
                        format: "javascript/es6",
                    },
                    {
                        destination: `${theme}.ts`,
                        format: "javascript/es6",
                    },
                    {
                        destination: `${theme}.d.ts`,
                        format: "typescript/es6-declarations",
                    },
                ],
            },
        },
    };
};

const registerTransforms = (transforms: Named<Transform>[]): void => {
    transforms.forEach(transform => StyleDictionary.registerTransform(transform));
};

const registerFormats = (formats: Format[]): void => {
    formats.forEach(format => StyleDictionary.registerFormat(format));
};

const buildTheme = async (theme: string): Promise<void> => {
    return new Promise((resolve, reject) => {
        log.info("\n==============================================");
        log.info(`\nProcessing: [${theme}]`);

        try {
            StyleDictionary.extend(getStyleDictionaryConfig(theme)).buildAllPlatforms();

            log.info(`\nEnd processing [${theme}]`);

            resolve();
        } catch (e) {
            reject(JSON.stringify(e, null, 2));
        }
    });
};

const build = async (themes: string[]): Promise<void> => {
    log.info("Build started...");
    registerTransforms(TRANSFORMS);
    registerFormats(FORMATS);

    Promise.all(themes.map(theme => buildTheme(theme)))
        .then(() => log.info("\n=============================================="))
        .then(() => log.success("\nBuild completed!"))
        .catch(error => log.error("\nBuild error!" + error));
};

build(["MW_core", "MW_component", "MW_semantic_light"]);
