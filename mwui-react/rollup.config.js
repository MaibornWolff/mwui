import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
// import { nodeResolve } from "@rollup/plugin-node-resolve";
// import commonjs from "@rollup/plugin-commonjs";

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
        typescript({ sourceMap: true }),
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
        // nodeResolve(),
        // commonjs({
        //     // non-CommonJS modules will be ignored, but you can also
        //     // specifically include/exclude files
        //     include: "node_modules/**", // Default: undefined
        //     // these values can also be regular expressions
        //     // include: /node_modules/

        //     // search for files other than .js files (must already
        //     // be transpiled by a previous plugin!)
        //     extensions: [".js"], // Default: [ '.js' ]
        // }),
    ],
};
