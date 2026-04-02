import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
    mode: "development",
    entry: "./src/index.js", // entry point
    output: { // output bundle object
        filename: "main.js", // name of bundle
        path: path.resolve(import.meta.dirname, "dist"),
        clean: true, // each time Webpack runs it empties output directory, which 
        // helps to keep it clean, so it only contains the files produced by the latest
    },
    plugins: [
        new HtmlWebpackPlugin({ // making sure Webpack configuration has access to HtmlWebpackPlugin
            template: "./src/template.html",
        }) 
    ]
};