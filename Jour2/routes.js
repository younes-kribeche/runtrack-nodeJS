const jsonData = require("./data.json")

function handleRequest(){
  const url = req.url;
  const method = req.method;

  if (url === '/tasks' && method === 'GET'){
    res.writeHead(200,{'Content-type':'application/json'});
    res.end(JSON.stringify(jsonData));
  }
  else if (url === '/tasks' && method === 'POST'){
    res.writeHead(201,{'Content-type':'application/json'});
    res.end(JSON.writeNewTask());
  }
  else if (url === '/tasks:id' && method === 'PUT'){
    res.writeHead(201,{'Content-type':'application/json'});

  }
  else if (url === '/tasks:id' && method === 'DELETE'){
    res.writeHead(201,{'Content-type':'application/json'});
    res.end(eraseLastTask());
  }
};

console.log(jsonData);
