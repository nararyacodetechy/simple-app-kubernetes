const express = require('express');
const app = express();
const port = 3003;
const cors = require('cors');

const corsOptions = {
  origin: 'http://127.0.0.1:8000/src',
};

app.use(cors(corsOptions));

// Endpoint membuat pembayaran
app.post('/payments/create', (req, res) => {
  const payment = {
    id: 456,
    status: 'Berhasil',
  };
  res.json(payment);
});

// Endpoint untuk menampilkan status pembayaran berdasarkan ID
app.get('/payments/:id/status', (req, res) => {
  const paymentId = Number(req.params.id);
  const status = 'Berhasil';
  res.json({ id: paymentId, status });
});

app.listen(port, () => {
  console.log(`Layanan Pembayaran berjalan di http://localhost:${port}`);
});
