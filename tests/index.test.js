
import path from 'path';
import webpack from 'webpack';

describe('test', () => {

    it('it can load JSX as hyperscript', (done) => {
        webpack({
            mode: 'development',
            entry: path.resolve(__dirname, 'source.js'),
            output: {
                path: path.resolve(__dirname),
                filename: 'source.bundle.js'
            },
            module: {
                rules: [
                    {
                        test: /\.js$/, //Replace this with any file extension
                        loader: path.resolve('./index.js'),
                    }
                ]
            }
        }, function(err) {
            console.log(err);

            const output = require('./source.bundle');
            console.log(output.toString());
            // expect(console.log).toBeCalledWith(JSON.parse(jsxReplacement));

            done();
        });
    });

});
