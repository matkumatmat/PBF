import React from 'react'

const productImages = [
  '/produk1.jpg',
  '/produk2.jpg',
  '/produk3.jpg',
  '/produk4.jpg',
  '/produk5.jpg'
]

const productInfo = {
  name: "Biofarma Vaksin XYZ",
  code: "BF-XYZ-001",
  category: "Vaksin",
  stock: 120,
  price: "Rp 250.000",
  description: "Vaksin XYZ adalah produk unggulan Biofarma untuk imunisasi anak dan dewasa. Telah teruji klinis dan aman digunakan.",
  manufacturer: "PT Bio Farma (Persero)",
  expired: "12/2026",
  batch: "BATCH-2025-01"
}

const ProductInfo = () => {
  return (
    <div className="max-w-3xl mx-auto p-4 mt-8 bg-white rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-4">{productInfo.name}</h1>
      {/* Gambar produk */}
      <div className="flex gap-2 mb-6 overflow-x-auto">
        {productImages.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Produk ${idx + 1}`}
            className="w-28 h-28 object-cover rounded-lg border"
            onError={e => e.target.style.display='none'}
          />
        ))}
      </div>
      {/* Info produk */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <div className="mb-2"><span className="font-semibold">Kode:</span> {productInfo.code}</div>
          <div className="mb-2"><span className="font-semibold">Kategori:</span> {productInfo.category}</div>
          <div className="mb-2"><span className="font-semibold">Stok:</span> {productInfo.stock}</div>
          <div className="mb-2"><span className="font-semibold">Harga:</span> {productInfo.price}</div>
        </div>
        <div>
          <div className="mb-2"><span className="font-semibold">Pabrikan:</span> {productInfo.manufacturer}</div>
          <div className="mb-2"><span className="font-semibold">Expired:</span> {productInfo.expired}</div>
          <div className="mb-2"><span className="font-semibold">Batch:</span> {productInfo.batch}</div>
        </div>
      </div>
      <div className="mb-2">
        <span className="font-semibold">Deskripsi:</span>
        <p className="text-gray-700">{productInfo.description}</p>
      </div>
    </div>
  )
}

export default ProductInfo