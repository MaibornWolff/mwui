const deepen = obj => {
  const result = {};

  // For each object path (property key) in the object
  for (const objectPath in obj) {
    // Split path into component parts
    const parts = objectPath.split('.');

    // Create sub-objects along path as needed
    let target = result;
    while (parts.length > 1) {
      const part = parts.shift();
      target = target[part] = target[part] || {};
    }

    // Set value at end of path
    target[parts[0]] = obj[objectPath];
  }
  return result;
};

const createArray = ({ dictionary }) => {
  const arr = dictionary.allTokens;
  return JSON.stringify(arr);
};

const filterTokensByType = (type, tokens) => {
  const entries = Object.entries(tokens);
  const res = entries.reduce((acc, cur) => {
    if (cur[1].type === type) {
      acc = { ...acc, [cur[0]]: cur[1].value };
      return acc;
    }

    // @ts-ignore
    if (Object.values(cur[1])[0].type === type) {
      const value = cur[1];
      acc = {
        ...acc,
        [cur[0]]: Object.entries(value).reduce((a, c) => {
          // @ts-ignore
          a = { ...a, [Number(c[0]) || c[0]]: c[1].value };
          return a;
        }, {}),
      };

      return acc;
    }

    return acc;
  }, {});
  return res;
};

module.exports = {
  createArray,
  filterTokensByType,
};
