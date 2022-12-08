const caseInsensitiveSearch = (firstStr, secondStr) => {
  if (typeof firstStr === "string" && typeof secondStr === "string") {
    const splittedFirstStr = firstStr.toLowerCase().split(" ");

    console.log(
      splittedFirstStr.some((element) => {
        return element === secondStr.toLowerCase();
      })
    );
  } else {
    console.log("Please enter string as the entries of function!");
  }
};

caseInsensitiveSearch("hello world", "WorLD");
