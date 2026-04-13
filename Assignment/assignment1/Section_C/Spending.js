const orders = [
    { id: 1, userId: 1, total: 500, status: "completed" },
    { id: 2, userId: 2, total: 300, status: "pending" },
    { id: 3, userId: 1, total: 200, status: "completed" },
    { id: 4, userId: 3, total: 700, status: "completed" }
  ];
  
  let totalSpending = orders.reduce((acc, o) => {
    acc[o.userId] = (acc[o.userId] || 0) + o.total;
    return acc;
  }, {});
  
  console.log(totalSpending);