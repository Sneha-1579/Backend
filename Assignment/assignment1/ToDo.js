const fs =require("fs");
const path =require("path");

const TODO_FILE = path.join(__dirname,"todos.json");

console.log(TODO_FILE);

// todo.json ek string jo path bta rhi h...
function readTodos() {
    const data = fs.readFileSync('ToDo.json',"utf-8");  
    return JSON.parse(data);
    }
    
console.log(readTodos());    

function writeTodos(todos) {
    fs.writeFileSync("ToDo.json",JSON.stringify(todos));
  };

  function addTodo(task) {
    const todos =readTodos();
    
    const newTodo = {
    id:Date.now(),
    task: task,
    done:false
      };
    
      todos.push(newTodo);
    writeTodos(todos);
    
    console.log("✅ Todo added:", task);
    }
    
addTodo("pata nahi yawwrrr");    


function listTodos(){
    const todos = readTodos();

    if (todos.length === 0){
        
    }
}
  
  
  
