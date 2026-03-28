const user = { name: 'A', password: 'x' };

const { password, ...rest } = user;

console.log(rest);   