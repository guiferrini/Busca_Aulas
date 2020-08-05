import express from 'express';

const app = express();

const PORT = 3333;

app.get('/users', (request, response) => {
  const users = [
    { name: 'gui', age: 31 },
    { name: 'ze', age: 30 }
  ]

  return response.json(users); //retorna um json;
  // return response.send('foi') //retorna um texto;
})

app.listen(PORT)