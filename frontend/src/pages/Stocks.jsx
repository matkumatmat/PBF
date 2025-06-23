import React, { useState } from 'react'

const initialStocks = [
  { id: 1, name: "Vaksin A", code: "VA-001", stock: 120, expired: "12/2026", batch: "BATCH-2025-01" },
  { id: 2, name: "Vaksin B", code: "VB-002", stock: 80, expired: "08/2025", batch: "BATCH-2024-02" },
  { id: 3, name: "Vaksin C", code: "VC-003", stock: 0, expired: "03/2027", batch: "BATCH-2026-03" },
]

const Stocks = () => {
  const [stocks, setStocks] = useState(initialStocks)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({
    name: "",
    code: "",
    stock: "",
    expired: "",
    batch: ""
  })

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setStocks([
      ...stocks,
      {
        id: stocks.length + 1,
        ...form,
        stock: Number(form.stock)
      }
    ])
    setForm({ name: "", code: "", stock: "", expired: "", batch: "" })
    setShowForm(false)
  }

  return (
    <div className="max-w-4xl mx-auto p-4 mt-8 bg-white rounded-xl shadow">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Daftar Stok Produk</h1>
        <button
          className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/80 transition"
          onClick={() => setShowForm(true)}
        >
          + Tambah Stok
        </button>
      </div>
      {/* Tabel stok */}
      <div className="overflow-x-auto">
        <table className="min-w-full border rounded-lg">
          <thead>
            <tr className="bg-primary text-white">
              <th className="px-4 py-2">Nama Produk</th>
              <th className="px-4 py-2">Kode</th>
              <th className="px-4 py-2">Stok</th>
              <th className="px-4 py-2">Expired</th>
              <th className="px-4 py-2">Batch</th>
            </tr>
          </thead>
          <tbody>
            {stocks.map(stock => (
              <tr key={stock.id} className="text-center border-b hover:bg-gray-50">
                <td className="px-4 py-2">{stock.name}</td>
                <td className="px-4 py-2">{stock.code}</td>
                <td className="px-4 py-2">{stock.stock}</td>
                <td className="px-4 py-2">{stock.expired}</td>
                <td className="px-4 py-2">{stock.batch}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Form tambah stok */}
      {showForm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
          >
            <h2 className="text-xl font-bold mb-4">Tambah Stok Baru</h2>
            <div className="mb-2">
              <label className="block mb-1">Nama Produk</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border rounded px-2 py-1"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block mb-1">Kode</label>
              <input
                type="text"
                name="code"
                value={form.code}
                onChange={handleChange}
                className="w-full border rounded px-2 py-1"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block mb-1">Stok</label>
              <input
                type="number"
                name="stock"
                value={form.stock}
                onChange={handleChange}
                className="w-full border rounded px-2 py-1"
                required
                min={0}
              />
            </div>
            <div className="mb-2">
              <label className="block mb-1">Expired</label>
              <input
                type="text"
                name="expired"
                value={form.expired}
                onChange={handleChange}
                className="w-full border rounded px-2 py-1"
                placeholder="MM/YYYY"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Batch</label>
              <input
                type="text"
                name="batch"
                value={form.batch}
                onChange={handleChange}
                className="w-full border rounded px-2 py-1"
                required
              />
            </div>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
                onClick={() => setShowForm(false)}
              >
                Batal
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded bg-primary text-white hover:bg-primary/80"
              >
                Simpan
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default Stocks