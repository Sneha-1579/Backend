const obj = { id: 1, name: 'A', email: 'a@x' };
const keys = ['id', 'email'];

let result = {};

for (let i = 0; i < keys.length; i++) {
  let key = keys[i];

  if (obj[key] !== undefined) {
    result[key] = obj[key];
  }
}

console.log(result);   