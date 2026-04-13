
const orders = [
    { id: 1, userId: 1, total: 500 },
    { id: 2, userId: 2, total: 300 },
    { id: 3, userId: 1, total: 200 },
    { id: 4, userId: 3, total: 700 }
  ];
  

  let result = orders.reduce((acc, order) => {
   
    if (!acc[order.userId]) {
      acc[order.userId] = [];
    }
  

    acc[order.userId].push(order);
  
    return acc;
  }, {});
  
  console.log(result);