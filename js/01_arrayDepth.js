const array = [10, [25, 13], [14, [55]], 2];

const arrayDepth = (array) => {
  return Array.isArray(array) ? 1 + Math.max(0, ...array.map(arrayDepth)) : 0;
};

console.log(arrayDepth(array));
