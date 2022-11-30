/* function moveZeros(arr) {
  let count = 0;
  let result = [];
  for (let number in arr) {
    if (arr[number] === 0) {
      count++
    } else {
      result.push(arr[number]);
    };
  };
  for (let i = 0; i < count; i++) {
    result.push(0);
  };
  return result;
}; */

function moveZeros(arr) {
  let result = arr.filter(element => element !== 0)
  let countZeros = arr.filter(v => v === 0);
  for (let element in countZeros) {
    result.push(0);
  }
  return result;
};

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));

