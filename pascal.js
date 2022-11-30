const pascal = (depth) => {
  let result = [];
  for (let i = 1; i <= depth; i++) {
    if (i == 1) {
      result.push([1]);
    }
    else if (i == 2) {
      result.push([1, 1]);
    }
    else {
      let arr = [1];
      let lastArr = result[i - 2];
      for (let i = 0; i < lastArr.length - 1; i++) {
        arr.push(lastArr[i] + lastArr[i + 1]);
      }
      arr.push(1);
      result.push(arr);
    };
  };
  return result;
};

console.log(pascal(1));
console.log(pascal(2));
console.log(pascal(3));
console.log(pascal(4));
console.log(pascal(5));