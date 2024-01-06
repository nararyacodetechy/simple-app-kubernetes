const express = require('express');
const app = express();

app.use(express.static('src'));

function makePayment() {
  fetch('http://pembayaran-service/payments/create', {
    method: 'POST',
    // tambahkan payload jika diperlukan
  })
    .then((response) => response.json())
    .then((payment) => {
      const paymentStatus = document.getElementById('paymentStatus');
      paymentStatus.textContent = `Status Pembayaran: ${payment.status}`;
    })
    .catch((error) => {
      console.error('Error making payment:', error);
    });
}

function makeShipment() {
  fetch('http://pengiriman-service/shipments/create', {
    method: 'POST',
    // tambahkan payload jika diperlukan
  })
    .then((response) => response.json())
    .then((shipment) => {
      const shipmentStatus = document.getElementById('shipmentStatus');
      shipmentStatus.textContent = `Status Pengiriman: ${shipment.status}`;
    })
    .catch((error) => {
      console.error('Error making shipment:', error);
    });
}

function fetchProducts() {
  fetch('http://produk-service/products', {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((products) => {
      const productGrid = document.querySelector('.product-grid');
      products.forEach((product) => {
        const productItem = document.createElement('div');
        productItem.textContent = `${product.name} - Price: ${product.price}`;
        productGrid.appendChild(productItem);
      });
    })
    .catch((error) => {
      console.error('Error fetching products:', error);
    });
}

// // Pembuatan pembayaran
// function makePayment() {
//   fetch('http://localhost:3003/payments/create', {
//     method: 'POST',
//     // Data tambahan atau payload untuk pembayaran dapat ditambahkan di sini
//   })
//     .then((response) => response.json())
//     .then((payment) => {
//       const paymentStatus = document.getElementById('paymentStatus');
//       paymentStatus.textContent = `Status Pembayaran: ${payment.status}`;
//     })
//     .catch((error) => {
//       console.error('Error making payment:', error);
//     });
// }

// // Pembuatan pengiriman
// function makeShipment() {
//   fetch('http://localhost:3004/shipments/create', {
//     method: 'POST',
//     // Data tambahan atau payload untuk pengiriman dapat ditambahkan di sini
//   })
//     .then((response) => response.json())
//     .then((shipment) => {
//       const shipmentStatus = document.getElementById('shipmentStatus');
//       shipmentStatus.textContent = `Status Pengiriman: ${shipment.status}`;
//     })
//     .catch((error) => {
//       console.error('Error making shipment:', error);
//     });
// }

// // Fungsi untuk mengambil daftar produk dari layanan Produk
// function fetchProducts() {
//   fetch('http://localhost:3002/products') // Ganti endpoint dengan sesuai layanan Produk Anda
//     .then((response) => response.json())
//     .then((products) => {
//       const productList = document.getElementById('productList');
//       products.forEach((product) => {
//         const productElement = document.createElement('div');
//         productElement.classList.add('product');
//         productElement.innerHTML = `
//           <h3>${product.name}</h3>
//           <p>Harga: ${product.price}</p>
//           <p>Stok: ${product.stock}</p>
//         `;
//         productList.appendChild(productElement);
//       });
//     })
//     .catch((error) => {
//       console.error('Error fetching products:', error);
//     });
// }

// Menampilkan daftar produk saat halaman dimuat
document.addEventListener('DOMContentLoaded', function () {
  fetchProducts();
});
