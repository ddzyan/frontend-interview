function sort(arr) {
  if (arr.length === 0) return arr;

  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let isSort = false;
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        isSort = true;
        const tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }

    if (!isSort) {
      break;
    }
  }

  return arr;
}

module.exports = sort;
