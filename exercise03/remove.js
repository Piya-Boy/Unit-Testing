
function search(arr, number) {
  const index = arr.indexOf(number);

  return index !== -1 ? index : -1;
}

function remove(arr, number) {
  const index = arr.indexOf(number);

  if (index !== -1) {
    arr.splice(index, 1);
  }

  return arr;
}

module.exports = { search, remove };
