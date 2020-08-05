import express from 'express';

const app = express();

app.use(express.json()); // por padrão express n entende json

const PORT = 3333;

app.get('/', (request, response) => {
  return response.json({ message: "Hello" });
});

 
app.listen(PORT, () => {
  console.log('Server Start ✅')
});