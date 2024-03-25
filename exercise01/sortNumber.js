function sortNumber(a, b, c) {
  // TODO: Implement Function

  // [3,2,1] => [1,2,3];
  return [a, b, c].sort((a, b) => a - b);

}

module.exports = sortNumber;
