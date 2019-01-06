# jsx-hyperscript-loader

A webpack loader for using JSX (HTML inside JS) to create DOM elements using [Hyperscript](https://www.npmjs.com/package/hyperscript)

E.g `const div = <div/>`

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
                test: /\.gjsx$/, //Replace this with any file extension including .js
                use: [
                    {
                        loader: path.resolve('jsx-hyperscript-loader'),
                        options: {
                            serialize: function(component) {
                                return "'JSX_REPLACEMENT'[";
                            }
                        }
                    }
                ]
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

