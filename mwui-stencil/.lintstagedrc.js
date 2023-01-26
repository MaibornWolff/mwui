module.exports = {
  "projects/**/*.ts": () => {
    return [`eslint --fix --quiet`];
  },
};
