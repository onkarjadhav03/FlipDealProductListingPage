let express = require('express');
let cors = require('cors');

let app = express();
app.use(cors());
const port = 3010;
let products = [
  {
    id: 1,
    name: 'Xiaomi iPhone 12',
    brand: 'Xiaomi',
    price: 60000,
    ram: 6,
    rom: 256,
    rating: 4.5,
    os: 'Android',
    camera: 108,
  },
  {
    id: 2,
    name: 'Oppo Mi 10',
    brand: 'Xiaomi',
    price: 30000,
    ram: 6,
    rom: 512,
    rating: 4,
    os: 'iOS',
    camera: 64,
  },
  {
    id: 3,
    name: 'Samsung Mi 10',
    brand: 'Oppo',
    price: 20000,
    ram: 4,
    rom: 256,
    rating: 4,
    os: 'Android',
    camera: 24,
  },
  {
    id: 4,
    name: 'Apple Find X2',
    brand: 'Samsung',
    price: 60000,
    ram: 8,
    rom: 512,
    rating: 4.5,
    os: 'iOS',
    camera: 48,
  },
  {
    id: 5,
    name: 'Oppo Mi 11',
    brand: 'Xiaomi',
    price: 30000,
    ram: 12,
    rom: 128,
    rating: 4,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 6,
    name: 'OnePlus Find X3',
    brand: 'Apple',
    price: 30000,
    ram: 12,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 64,
  },
  {
    id: 7,
    name: 'Apple Pixel 5',
    brand: 'Apple',
    price: 70000,
    ram: 4,
    rom: 512,
    rating: 4.5,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 8,
    name: 'Google Mi 10',
    brand: 'Oppo',
    price: 30000,
    ram: 8,
    rom: 64,
    rating: 5,
    os: 'iOS',
    camera: 108,
  },
  {
    id: 9,
    name: 'Oppo Mi 11',
    brand: 'Samsung',
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 24,
  },
  {
    id: 10,
    name: 'Xiaomi Mi 10',
    brand: 'Oppo',
    price: 60000,
    ram: 16,
    rom: 512,
    rating: 4.5,
    os: 'Android',
    camera: 12,
  },
  {
    id: 11,
    name: 'OnePlus Pixel 5',
    brand: 'Apple',
    price: 60000,
    ram: 12,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 12,
  },
  {
    id: 12,
    name: 'Xiaomi OnePlus 8',
    brand: 'Xiaomi',
    price: 70000,
    ram: 8,
    rom: 64,
    rating: 4.5,
    os: 'Android',
    camera: 48,
  },
  {
    id: 13,
    name: 'Xiaomi Pixel 6',
    brand: 'Oppo',
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 108,
  },
  {
    id: 14,
    name: 'Samsung Find X2',
    brand: 'Oppo',
    price: 40000,
    ram: 12,
    rom: 512,
    rating: 4.7,
    os: 'Android',
    camera: 48,
  },
  {
    id: 15,
    name: 'Google OnePlus 8',
    brand: 'Apple',
    price: 20000,
    ram: 16,
    rom: 64,
    rating: 5,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 16,
    name: 'OnePlus iPhone 12',
    brand: 'OnePlus',
    price: 20000,
    ram: 6,
    rom: 128,
    rating: 4.5,
    os: 'iOS',
    camera: 64,
  },
  {
    id: 17,
    name: 'Google Mi 11',
    brand: 'Oppo',
    price: 70000,
    ram: 6,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 64,
  },
  {
    id: 18,
    name: 'Google OnePlus 9',
    brand: 'Apple',
    price: 20000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 64,
  },
  {
    id: 19,
    name: 'Oppo Galaxy S22',
    brand: 'Samsung',
    price: 20000,
    ram: 16,
    rom: 256,
    rating: 4.7,
    os: 'Android',
    camera: 12,
  },
  {
    id: 20,
    name: 'Apple Pixel 5',
    brand: 'Oppo',
    price: 40000,
    ram: 8,
    rom: 128,
    rating: 4.7,
    os: 'Android',
    camera: 108,
  },
];

//function to sort based on popularity
function sortedProducts(product1, product2) {
  return product2.rating - product1.rating;
}
//Endpoint 1: Get the products sorted by popularity
app.get('/products/sort/popularity', (req, res) => {
  let productCopy = products.slice();
  productCopy.sort(sortedProducts);
  res.json(productCopy);
});

//function to sort based on sorted by “high-to-low” price
function sortedProductsPrice(product1, product2) {
  return product2.price - product1.price;
}

//Endpoint 2: Get the products sorted by “high-to-low” price
app.get('/products/sort/price-high-to-low', (req, res) => {
  let productCopy = products.slice();
  productCopy.sort(sortedProductsPrice);
  res.json(productCopy);
});

//function to sort based on sorted by sorted by “low-to-high” price
function sortedProductsPriceLowToHigh(product1, product2) {
  return product1.price - product2.price;
}

//Endpoint 3: Get the products sorted by “low-to-high” price
app.get('/products/sort/price-low-to-high', (req, res) => {
  let productCopy = products.slice();
  productCopy.sort(sortedProductsPriceLowToHigh);
  res.json(productCopy);
});

//function to Filter based on the “RAM” option.
function filterByRam(product, ram) {
  return product.ram == ram;
}

//Endpoint 4: Filter the products based on the “RAM” option.
app.get('/products/filter/ram', (req, res) => {
  let ram = parseFloat(req.query.ram);
  let result = products.filter((product) => filterByRam(product, ram));
  res.json(result);
});

//function to Filter based on the “ROM” option.
function filterByRom(product, rom) {
  return product.rom == rom;
}

//Endpoint 5: Filter the products based on the “ROM” option.
app.get('/products/filter/rom', (req, res) => {
  let rom = parseFloat(req.query.rom);
  let result = products.filter((product) => filterByRom(product, rom));
  res.json(result);
});

//function to Filter based on the “Brand” option.
function filterByBrand(product, brand) {
  return product.brand.toLowerCase() == brand.toLowerCase();
}

//Endpoint 6: Filter the products based on the “Brand” option.
app.get('/products/filter/brand', (req, res) => {
  let brand = req.query.brand;
  let result = products.filter((product) => filterByBrand(product, brand));
  res.json(result);
});

//function to Filter based on the “OS” option.
function filterByOs(product, os) {
  return product.os.toLowerCase() == os.toLowerCase();
}

//Endpoint 7: Filter the products based on the “OS” option.
app.get('/products/filter/os', (req, res) => {
  let os = req.query.os;
  let result = products.filter((product) => filterByOs(product, os));
  res.json(result);
});

//function to Filter based on the “Price” option.
function filterByPrice(product, price) {
  return product.price <= price;
}

//Endpoint 8: Filter the products based on the “Price” option.
app.get('/products/filter/price', (req, res) => {
  let price = parseFloat(req.query.price);
  let result = products.filter((product) => filterByPrice(product, price));
  res.json(result);
});

//Endpoint 8: Send original array of products
app.get('/products', (req, res) => {
  res.json(products);
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
