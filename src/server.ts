import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (reg, res) => {
    res.json({ message: 'API do LinkFlow está rodando!' });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});