/**
 * Returns a function to get a path in a config object
 * @param {*} config A config object
 */
function getPathInConfig(config) {
  if (!config || typeof config !== 'object') throw new Error('Config must be an object');
  // Path to get in the config
  return function getPath(path) {
    // direct access
    if (typeof path === 'string') {
      return config[path];
    }

    // array access
    if (Array.isArray(path)) {
      let res = config; // TODO: deep copy
      for (let part of path) {
        if (typeof res != 'object' || res === null)
          throw new Error(`Path ${path} not found in the config`);

        res = res[part];
      }
      return res;
    }

    throw new Error('path must be a string or an array');
  };
}

module.exports = getPathInConfig;
