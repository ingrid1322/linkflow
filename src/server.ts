import 'dotenv/config';
import express from 'express';
import path from 'path';
import linkRoutes from './routes/linkRoutes';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));
app.use(linkRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});