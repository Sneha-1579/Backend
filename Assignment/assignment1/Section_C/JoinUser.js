
const users = [
    { id: 1, name: "Aman" },
    { id: 2, name: "Riya" },
    { id: 3, name: "Rahul" }
  ];
  
  const orders = [
    { id: 1, userId: 1, total: 500 },
    { id: 2, userId: 2, total: 300 },
    { id: 3, userId: 1, total: 200 },
    { id: 4, userId: 4, total: 700 } 
  ];
  

  let userMap = {};
  
  for (let i = 0; i < users.length; i++) {
    userMap[users[i].id] = users[i].name;
  }

  let result = orders.map((order) => {
    return {
      ...order,
      userName: userMap[order.userId] || null
    };
  });
  
  console.log(result);