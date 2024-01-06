const express = require('express');
const app = express();
const port = 3004;
const cors = require('cors');

const corsOptions = {
  origin: 'http://127.0.0.1:8000/src',
};

app.use(cors(corsOptions));

// Endpoint membuat pengiriman
app.post('/shipments/create', (req, res) => {
  const shipment = {
    id: 123,
    status: 'Dalam pengiriman',
  };
  res.json(shipment);
});

// Endpoint untuk melacak status pengiriman berdasarkan ID
app.get('/shipments/:id/track', (req, res) => {
  const shipmentId = Number(req.params.id);
  const status = 'Dalam pengiriman';
  res.json({ id: shipmentId, status });
});

app.listen(port, () => {
  console.log(`Layanan Pengiriman berjalan di http://localhost:${port}`);
});
