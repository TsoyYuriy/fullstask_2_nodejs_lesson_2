const express = require('express');
const fileDb = require('./db/fileDb') //! здесь нужно импотировать весь объкт потому что мы в файле fileDb экспомтируем объект а еотормо находятся методы, для того чтобы работала деструктуризация, нужно явно делать экспорты этих методов через имя об

const router = express.Router();

router.get('/', (req, res) => {

  const products = fileDb.getProducts();

  res.status(200).send(products)
})

router.get('/:id', (req, res) => {
  res.send('A single product')
})

router.post('/', (req, res) => {

  const body = req.body; // {name: Milk, price: 200, id: 4}

  fileDb.addProduct(body)

  res.status(201).send(body);

})

module.exports = router