const obj = { a: 1, b: 2 };

let result = {};

for (let key in obj) {
  let value = obj[key];
  result[value] = key;
}

console.log(result);   