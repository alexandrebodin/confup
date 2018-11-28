const path = require('path');
const findUp = require('find-up');

const getPathInConfig = require('./get-path');

function loadConfup(options = {}) {
  // load from conf dir or default dir
  const dir = options.dir || path.join(process.cwd(), 'confup');

  // load default.js file
  const config = require(path.join(dir, 'default.js'));

  return {
    get: getPathInConfig(config),
  };
}

function init() {
  const confupRcPath = findUp.sync('.confuprc.js');

  if (!confupRcPath) {
    return loadConfup();
  }

  return loadConfup(require(confupRcPath));
}

module.exports = init();
