const path = require("path");
const fs = require('fs');

module.exports = (storybookBaseConfig) => {
  const SRC_PATH = '../src/components';
  const dirPath = path.join(__dirname, SRC_PATH);
  const arrPath = fs.readdirSync(dirPath);

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