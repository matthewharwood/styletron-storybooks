const path = require("path");
const fs = require('fs');
// Export a function. Accept the base config as the only param.
module.exports = (storybookBaseConfig) => {
  const dirPath = path.join(__dirname, "../src/components");
  const arrPath = fs.readdirSync(dirPath);
  const notRight = (main) => {
    return Boolean(fs.statSync(main));
  };

  const alias = arrPath.filter((d) => !/^\./.test(d)).reduce((p, v) => {

    try {
      let PKG = path.join(dirPath, v, 'package.json');

      let pkg;
      try {
        pkg = require(PKG);
      } catch(e) {
        throw new Error(`please include a package.json inside ${path.join(dirPath, v)}`)
      }
      try {
        p[pkg.name] = path.join(dirPath, v, pkg.main);
        fs.statSync(p[pkg.name]);
      } catch(e) {
        throw new Error(`please update ${PKG} "main: <path-to-index.js>" `)
      }
    } catch(e) {
      console.error(e);
    }

    return p;
  }, {});
  storybookBaseConfig.resolve = {
    extensions: ['.js', '.json'],
    alias,
  };

  return storybookBaseConfig;
};