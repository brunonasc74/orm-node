const express = require('express');
const routes = require('./router');

const app = express();
routes(app);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`servidor rodando na porta ${port}`));

module.exports = app;
