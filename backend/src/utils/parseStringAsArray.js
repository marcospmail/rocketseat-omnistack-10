module.exports = function(value) {
  return value.split(',').map(tech => tech.trim());
}