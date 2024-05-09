const fs = require('fs')

const filename = './db/db.json'

let data = []

const start = {

  init() {

    try {

      const fileContents = fs.readFileSync(filename)
      data = JSON.parse(fileContents)

    } catch (error) {
      data = []
    }

  },

  getProducts() {
    return data;
  },

  addProduct(prod) {
    data.push(prod);
    this.save()
  },

  save() {
    fs.writeFileSync(filename, JSON.stringify(data))
  }
}

module.exports = start