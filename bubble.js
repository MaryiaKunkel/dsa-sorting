function bubbleSort(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let swap = false;
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        let el = array[j + 1];
        array[j + 1] = array[j];
        array[j] = el;
        swap = true;
      }
    }
    if (!swap) break;
  }

  return array;
}

module.exports = bubbleSort;
