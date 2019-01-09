# jsx-hyperscript-loader [![npm version](https://badge.fury.io/js/jsx-hyperscript-loader.svg)](https://badge.fury.io/js/jsx-hyperscript-loader) [![Build Status](https://travis-ci.org/nik-m2/jsx-hyperscript-loader.svg?branch=master)](https://travis-ci.org/nik-m2/jsx-hyperscript-loader)

A webpack loader for using JSX (HTML inside JS) to create DOM elements using [Hyperscript](https://www.npmjs.com/package/hyperscript)

E.g `const div = <div>Hello!</div>`

[Create your own JSX loader](https://github.com/nik-m2/generic-jsx-loader)

## Setup

`npm install jsx-hyperscript-loader --save-dev`

Add to `webpack.config.js`
```
module.exports = {
    // ...
    module: {
        rules: [
            {
                test: /\.js/, //Replace this with any file extension
                loader: 'jsx-hyperscript-loader',
            }
        ]
    }
}
```

## Usage

```
// parentheses just for clarity (not required) 
const test = (
   <div class="name-field">
      Enter your name
      <input type="text"/>
   </div>
);
```

## More to come!

