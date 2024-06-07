function selectionSort(arr) {
  let min;
  let temp;
  for (let i = 0; i < arr.length; i++) {
    min = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

selectionSort([4, 20, 12, 10, 7, 9]);

module.exports = selectionSort;
