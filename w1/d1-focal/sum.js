const args = process.argv;
console.log(args);

const argsSlice = args.slice(2);
const argsNum = argsSlice.map(function(num) {
  return Number(num);
});

let total = 0;
for (let i = 2; i < argsNum.length; i++) {
  total += argsNum[i];
}

console.log(total);


