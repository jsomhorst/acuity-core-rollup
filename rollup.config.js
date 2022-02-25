import lwc from "@lwc/rollup-plugin";
import babel from "@rollup/plugin-babel";
import replace from "@rollup/plugin-replace";
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload'
import typescript from '@rollup/plugin-typescript';

export default {
    input: "src/index.js",

    output: {
        file: "dist/index.js",
        format: "esm",
    },

    plugins: [
        babel({
            presets: ["@babel/preset-typescript"],
            extensions:[".ts"]
        }),
        typescript(),
        replace({
            "process.env.NODE_ENV": JSON.stringify("development"),
        }),
        lwc(),
        serve({
            host:'development.acuity.nl',
            port: 8080,
            contentBase: 'src'
        }),
        livereload(),
    ],
};