const arr = ['a', 'b', 'a', 'c'];

let obj = {};

for (let i = 0; i < arr.length; i++) {
  let val = arr[i];

  if (obj[val]) {
    obj[val] = obj[val] + 1;
  } else {
    obj[val] = 1;
  }
}

console.log(obj);   