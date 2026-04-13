const obj = { a: { b: 2 } };

const copy = JSON.parse(JSON.stringify(obj));

console.log(copy);