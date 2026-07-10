// Webpack


// Webpack is a bundler (60-70% of legacy code and 10-20% of new projects).

// Webpack is an open-source JavaScript module bundler widely used in modern web development. 
// It takes application modules and their dependencies—JavaScript, CSS, images, and more—and 
// bundles them into optimized static assets for browsers.



// src and dist

// src - source, its directory where we have all our work done and source code,

// dist - distribution, its directory from where we depliy and where we output bundled files from src.

// workflow = src -> dist -> deploy



// Bundling JS

// webpack.config.js file needed to be created,which will contain all details we need for 
// bundling (entry PointerEvent, output, plugins, loaders, etc)

// browsers DONT HAVE Node's requier() by default


// HtmlWebpackPlugin is used to bundle JS with HTML. Links JS to HTML by itself.


// css-loader reads any CSS files and stores result as a string.

// style-loader takes that string and adds JS code that applies those styles to the page.

// html-loader detects image file paths in HTML template and loads right image files. 

// if need to use a local image file in JS (e.g DOM) we need to import images into JS module 
// but images arent JS, so we need to tell Webpack that these files will be assets by adding 
// asset/resource rule. 


// Webpack starts from an entry file, builds a dependency graph by analyzing imports, processes 
// each module with loaders, uses plugins to extend the build process, and outputs optimized 
// bundles and assets for the browser.






// Vite


// Vite took a different approach. It split the work into two parts:

// 1. Dependencies (libraries that rarely change) are pre-bundled once using fast native 
// tooling, so they're ready instantly.
// 2. Source code (your application code that changes frequently) is served on-demand 
// over native ESM. The browser loads only what it needs for the current page, and 
// Vite transforms each file as it's requested.


// Webpack: “I know everything upfront → build once → serve one file”
// Vite: “I only know what I need → serve only what you request, but track relationships 
// for updates and caching”


// Vite also creates dependency graph, but only for better caching and optimization.

// Vite by defaut runs Hot Module Replacement (re-renders modules which were changed), 
// but HMR can be deactivated for deeper check/test. 