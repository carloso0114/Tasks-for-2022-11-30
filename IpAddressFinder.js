/* function f(url) {
  const a = 256;
  let n = 0;
  for (const element of url) {
    n+=element.charCodeAt();
  };
  return [n%a,n*2%a,n*3%a,n*4%a];
}
console.log(f('www.codewars.com'));
console.log(f('www.starwiki.com'));
console.log(f('www.winnerss.win')); */

function f2(url) {
  const totalAscii = url.split('').map(element => element.charCodeAt()).reduce((acc, currentValue) => acc + currentValue);
  return [totalAscii%256,totalAscii*2%256,totalAscii*3%256,totalAscii*4%256];
};
console.log(f2('www.codewars.com'));
console.log(f2('www.starwiki.com'));
console.log(f2('www.winnerss.win'));