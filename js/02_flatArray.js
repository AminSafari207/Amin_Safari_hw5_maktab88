const flatArray = (arr) => {
  if (Array.isArray(arr)) {
    while (arr.some(Array.isArray)) {
      arr = arr.reduce((v, e) => v.concat(e), []);
    }

    console.log(arr);
  } else {
    console.log("Please enter an array as the entry of function!");
  }
};

flatArray([
  10,
  [25, 13],
  [14, [55]],
  2,
  [
    10,
    [25, 13],
    [14, [55]],
    2,
    [10, [25, 13], [14, [55, [10, [25, 13], [14, [55]], 2]]], 2],
  ],
]);
