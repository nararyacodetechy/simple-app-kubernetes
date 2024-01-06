const express = require('express');
const app = express();
const port = 3002;
const cors = require('cors');

const corsOptions = {
  origin: 'http://127.0.0.1:8000/src',
};

app.use(cors(corsOptions));

let products = [
  { id: 1, name: 'Produk A', price: 100, stock: 20 },
  { id: 2, name: 'Produk B', price: 75, stock: 15 },
];

// Endpoint menampilkan daftar produk
app.get('/products', (req, res) => {
  res.json(products);
});

// Endpoint untuk menampilkan detail produk berdasarkan ID
app.get('/products/:id', (req, res) => {
  const productId = Number(req.params.id);
  const product = products.find((product) => product.id === productId);
  if (!product) {
    return res.status(404).json({ error: 'Produk tidak ditemukan' });
  }
  res.json(product);
});

// Endpoint untuk memperbarui stok produk
app.put('/products/:id/updateStock', (req, res) => {
  const productId = Number(req.params.id);
  const { newStock } = req.body;
  const productIndex = products.findIndex(
    (product) => product.id === productId
  );
  if (productIndex === -1) {
    return res.status(404).json({ error: 'Produk tidak ditemukan' });
  }
  products[productIndex].stock = newStock;
  res.json(products[productIndex]);
});

app.listen(port, () => {
  console.log(`Layanan Produk berjalan di http://localhost:${port}`);
});
