const arr = [7, 3, 9, 0];

let min = arr.reduce(function(a, b) {
  if (b < a) {
    return b;
  } else {
    return a;
  }
});

console.log(min);   