import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";

export default {
    input: "./src/components/stencil-generated/index.ts",
    output: [
        {
            dir: "dist",
            format: "esm",
            entryFileNames: "[name].mjs",
        },
        {
            dir: "dist",
            format: "cjs",
            entryFileNames: "[name].js",
        },
    ],
    plugins: [
        typescript(),
        terser({
            format: {
                comments: "some",
                beautify: true,
                ecma: "2022",
            },
            compress: false,
            mangle: false,
            module: true,
        }),
    ],
};
