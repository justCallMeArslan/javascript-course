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
    ],
    module: {
        rules: [
            {
                test: /\.css$/i, // checks for imported files with .css ending
                use: ["style-loader", "css-loader"], // use these if found, order in [] is important
            },
            {
                test: /\.html$/i, // checks for imported files with .html ending (for images in HTML)
                use: ["html-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i, // RegEx can be changed anytime, to add or 
                // remove any unwanted file extensions
                type: "asset/resource",
            }
        ]
    }
}