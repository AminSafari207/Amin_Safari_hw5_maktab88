const sortOrder = (arr) => {
  let finalArray = [];

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].replace(/-/g, "");
  }

  const maxStringLength = Math.max(...arr.map((el) => el.length));

  for (let j = 0; j < maxStringLength; j++) {
    let temp = [];

    arr.forEach((str) => {
      if (typeof str.charAt(j) !== "undefined") {
        temp.push(str.charAt(j));
      }
    });

    finalArray.push([...new Set(temp)]);
  }

  console.log(finalArray);
};

sortOrder(["a-b-c-d", "a-b-f-g", "m-n-l-k", "m-o-p-j", "v-q-w-e", "x-z-p-j"]);
