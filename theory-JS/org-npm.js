// npm - package manager

// using package.json fo manipulation of packages and dependies we know waht should be updated or downloaded

// example of json:

// {
//     "name": "curriculum",
//         "version": "1.0.0",
//             "description": "[The Odin Project](https://www.theodinproject.com/) (TOP) is an open-source curriculum for learning full-stack web development. Our curriculum is divided into distinct courses, each covering the subject language in depth. Each course contains a listing of lessons interspersed with multiple projects. These projects give users the opportunity to practice what they are learning, thereby reinforcing and solidifying the theoretical knowledge learned in the lessons. Completed projects may then be included in the user's portfolio.",
//                 "scripts": {
//         "lint": "markdownlint-cli2",
//             "fix": "markdownlint-cli2 --fix"
//     },
//     "license": "CC BY-NC-SA 4.0",
//         "devDependencies": { // files which needed to be downloaded
//         "markdownlint-cli2": "^0.12.1"
//     }
// }




// sharing via npm:


// Sharing your JavaScript project as an NPM package (so your friend can install it with npm install)—got it. Let me break it down clearly.

// 1️⃣ Prepare your project

// Make sure your project has a package.json. If not, create one:

// npm init
// Answer the prompts (name, version, description, entry point like index.js, etc.)
// This generates a package.json file

// Example:

// {
//   "name": "my-cool-clock",
//   "version": "1.0.0",
//   "main": "index.js",
//   "scripts": {
//     "start": "node index.js"
//   },
//   "keywords": ["clock", "timer"],
//   "author": "Your Name",
//   "license": "MIT"
// }
// 2️⃣ Make sure your code is “exportable”

// If your friend is going to require or import it, you need to export your class.

// For example, in index.js:

// class Countdown {
//     constructor(start) { this.value = start; }
//     start() { /* ... */ }
// }

// module.exports = Countdown; // CommonJS style

// Or, for ES6 module style:

// export default Countdown;
// 3️⃣ Share it locally without publishing to NPM

// If you don’t want to publish it publicly:

// In your project folder, run:
// npm pack
// This creates a file like my-cool-clock-1.0.0.tgz
// Send this .tgz file to your friend.
// Your friend can install it locally:
// npm install ./path-to/my-cool-clock-1.0.0.tgz

// Then use it in their code:

// const Countdown = require('my-cool-clock');
// let timer = new Countdown(5);
// timer.start()