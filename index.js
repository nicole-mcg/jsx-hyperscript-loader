const genericJsxLoader = require('generic-jsx-loader');

// Used to serialize a component from an object
function serializeObject(compObj) {
  const { tag, props, children } = compObj;
  
  // We need to recursivly serialize the children too
  const childJS = children && children.reduce((acc, child, index) => {
      acc += `${serialize(child)}`;
      if (index != children.length - 1) acc += ', ';
      return acc;
  }, "");

  const serializedChildren = childJS ? `[${childJS}]` : `[]`;
  const serializedProps = props.toJS();

  // Output a call to Hyperscript in place of the JSX
  return `h("${tag}", ${serializedChildren}, ${serializedProps})`;
}

// Called by the parser to serialize components (could be string or obj)
// This function is given root elements from blocks of fully parsed JSX
// This means it's up to this function to recursively call itself for it's children 
function serialize(parsedComponent){
  if (typeof parsedComponent === "string") {
    return `"${parsedComponent}"`;
  }
  
  return serializeObject(parsedComponent);
};

function createImports() {
  return "const h = require('hyperscript')";
}

function loader(source) {
    const options = {
        serialize,
        createImports,
    };
    
    return genericJsxLoader(source, options);
}

module.exports = loader;
module.exports.default = loader;