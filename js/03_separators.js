const separators = (num) => {
  if (typeof num === "number") {
    let final;
    let strNum = num.toString();

    if (strNum.length < 4) {
      console.log(strNum);
    }
    if (strNum.length >= 4) {
      let rev = strNum.split("").reverse();

      for (let i = 1; i <= Math.floor(strNum.length / 3); i++) {
        rev.splice(i * 3 + i - 1, 0, ",");
      }

      final = rev.reverse().join("");

      console.log(final);
    }
  } else {
    console.log("Please enter a number as the entry of function!");
  }
};

separators(36783679352301548);
