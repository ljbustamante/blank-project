module.exports = {
  '*.{ts,json}': ['eslint --fix -c .eslintrc.json', 'prettier --write \"src/**/*.ts\"'],
}
