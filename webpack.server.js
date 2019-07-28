 const path = require("path");
 
 module.exports = {
     // inform webpack that we're building a bundle
     // for nodeJS, rather than for the browser

     target: "node",

     // tell webpack the root file of our
     // server application
     entry: "./src/index.js",

    // tell webpack where to put the output file 
    // that is generated
     output: {
         filename: "bundle.js",
         path: path.resolve(__dirname, "build")
     },

     // tel webpack to run babel on every file it runs through
     module: {
         rules: [
             {
                 test: /\.js?$/,
                 loader: "babel-loader",
                 exclude: /node_modules/,
                 options: {
                     presets: [
                         "@babel/preset-react",
                         ["@babel/preset-env",{ targets: { browsers: ["last 2 versions"]}}] 
                     ],
                     plugins: [
                         "module:@babel/plugin-proposal-class-properties"
                     ]
                 }
             }
         ]
     }
 };