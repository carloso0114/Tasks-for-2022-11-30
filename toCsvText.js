function toCsvText(array) {
  let result = array.map((el, i, arr) => {
    if (i + 1 === arr.length) {
      return String(el)
    } else {
      return el + `${'\n'}`
    }
  });
  return result.join('')
}
console.log(toCsvText([
  [0, 1, 2, 3, 45],
  [10, 11, 12, 13, 14],
  [20, 21, 22, 23, 24],
  [30, 31, 32, 33, 34]
]));
console.log(toCsvText([
  [ -25, 21, 2, -33, 48 ],
  [ 30,31,-32,33,-34 ]
 ]));
console.log(toCsvText([
  [ 5,55,5,5,55 ],
  [ 6,6,66,23,24 ],
  [ 666,31,66,33,7 ]
 ]));