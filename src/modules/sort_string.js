function sortStrings(array, key) {
  array.forEach(item => {
      if (item[key]) {
          item[key] = item[key].replace(/\s+/g, '');
      }
  });
  return array.sort((a, b) => a[key].localeCompare(b[key]));
}
module.exports = { sortStrings };
