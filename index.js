const deep = require('clone');

/**
 * Quickly clones a object structure
 *
 * @param {Object} obj
 * @returns {Object}
 */
function clone(obj) {
  if (typeof obj !== 'object') return obj;
  const result = Array.isArray(obj) ? [] : {};
  const keys = Object.keys(obj);
  keys.forEach((k) => {
    if (Array.isArray(obj[k])) result[k] = obj[k].map(clone);
    else if (typeof obj[k] === 'object') {
      if (obj[k].constructor.name !== 'Object') result[k] = deep(obj[k]);
      else result[k] = clone(obj[k]);
    }
    else result[k] = obj[k];
  });
  return result;
}

module.exports = clone;