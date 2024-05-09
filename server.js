const express = require('express');
const products = require('./products');
const {init} = require('./db/fileDb')
const app = express();
const port = 9000;


init();
app.use(express.json())
app.use('/products', products)


app.listen(port, () => {
  console.log(`Server start on http://localhost:9000/`);
})
