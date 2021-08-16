const quickSort = function (arr) {
  if (arr.length <= 1) return arr;

  let left = [];
  let right = [];
  let pivot = arr[0];

  for (let n = 1; n < arr.length; n++) {
    if (arr[n] <= pivot) left.push(arr[n]);
    else if (arr[n] >= pivot) right.push(arr[n]);
  }

  const sortLeft = quickSort(left);
  const sortright = quickSort(right);

  return [...sortLeft, pivot, ...sortright];
};
