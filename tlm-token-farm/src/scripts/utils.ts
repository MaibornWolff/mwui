interface TokenObject {
  type: string;
  path: string[];
  name: string;
  value: string;
}

const deepen = (obj: TokenObject | {}) => {
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

export const createArray = ({ dictionary }) => {
  const arr = dictionary.allTokens;
  return JSON.stringify(arr);
};

export const filterTokensByType = (type, tokens: Record<string, TokenObject>) => {
  const obj = Object.values(tokens).reduce((acc, cur) => {
    if (cur.type === type) {
      acc[cur.path.join('.')] = `var(--${cur.name}, ${cur.value})`;
    }
    return acc;
  }, {});

  return deepen(obj);
};
