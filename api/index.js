const express = require('express');
const app = express();
app.use(express.json());

app.get('/teste', (_, res) => res.status(200).send({ mensagem: 'oi, api k' }));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`servidor rodando na porta ${port}`));
