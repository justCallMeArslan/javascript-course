import path from "node:path";

export default {
    mode: "development",
    entry: "./src/index.js", // entry point
    output: { // output bundle object
        filename: "main.js", // name of bundle
        path: path.resolve(import.meta.dirname, "dist"), 
        clean: true, // each time Webpack runs it empties output directory, which 
        // helps to keep it clean, so it only contains the files produced by the latest
    },
};