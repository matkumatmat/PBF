import React, { useState } from 'react'

const initialPacking = [
  {
    id: 1,
    tujuan: "RSUD Bandung",
    noPO: "PO-2025-001",
    produk: [
      { nama: "Vaksin A", jumlah: 20 },
      { nama: "Vaksin B", jumlah: 10 }
    ]
  },
  {
    id: 2,
    tujuan: "Puskesmas Cimahi",
    noPO: "PO-2025-002",
    produk: [
      { nama: "Vaksin C", jumlah: 15 }
    ]
  }
]

const Packing = () => {
  const [packingList, setPackingList] = useState(initialPacking)
  const [editId, setEditId] = useState(null)
  const [form, setForm] = useState({
    tujuan: "",
    noPO: "",
    produk: [{ nama: "", jumlah: "" }]
  })

  const handleEdit = (item) => {
    setEditId(item.id)
    setForm({
      tujuan: item.tujuan,
      noPO: item.noPO,
      produk: item.produk.map(p => ({ ...p }))
    })
  }

  const handleFormChange = (e, idx) => {
    if (e.target.name === "nama" || e.target.name === "jumlah") {
      const newProduk = [...form.produk]
      newProduk[idx][e.target.name] = e.target.value
      setForm({ ...form, produk: newProduk })
    } else {
      setForm({ ...form, [e.target.name]: e.target.value })
    }
  }

  const handleAddProduk = () => {
    setForm({ ...form, produk: [...form.produk, { nama: "", jumlah: "" }] })
  }

  const handleRemoveProduk = (idx) => {
    const newProduk = form.produk.filter((_, i) => i !== idx)
    setForm({ ...form, produk: newProduk })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setPackingList(packingList.map(item =>
      item.id === editId
        ? { ...item, ...form, produk: form.produk.map(p => ({ ...p, jumlah: Number(p.jumlah) })) }
        : item
    ))
    setEditId(null)
    setForm({ tujuan: "", noPO: "", produk: [{ nama: "", jumlah: "" }] })
  }

  const handleCancel = () => {
    setEditId(null)
    setForm({ tujuan: "", noPO: "", produk: [{ nama: "", jumlah: "" }] })
  }

  return (
    <div className="max-w-4xl mx-auto p-4 mt-8 bg-white rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-4">Daftar Packing Produk</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border rounded-lg">
          <thead>
            <tr className="bg-primary text-white">
              <th className="px-4 py-2">Tujuan Kirim</th>
              <th className="px-4 py-2">No PO</th>
              <th className="px-4 py-2">Daftar Produk</th>
              <th className="px-4 py-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {packingList.map(item => (
              <tr key={item.id} className="text-center border-b hover:bg-gray-50">
                <td className="px-4 py-2">{item.tujuan}</td>
                <td className="px-4 py-2">{item.noPO}</td>
                <td className="px-4 py-2">
                  <ul className="text-left">
                    {item.produk.map((p, idx) => (
                      <li key={idx}>{p.nama} <span className="text-xs text-gray-500">({p.jumlah})</span></li>
                    ))}
                  </ul>
                </td>
                <td className="px-4 py-2">
                  <button
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                    onClick={() => handleEdit(item)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Form Edit Packing */}
      {editId !== null && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
          >
            <h2 className="text-xl font-bold mb-4">Edit Packing</h2>
            <div className="mb-2">
              <label className="block mb-1">Tujuan Kirim</label>
              <input
                type="text"
                name="tujuan"
                value={form.tujuan}
                onChange={handleFormChange}
                className="w-full border rounded px-2 py-1"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block mb-1">No PO</label>
              <input
                type="text"
                name="noPO"
                value={form.noPO}
                onChange={handleFormChange}
                className="w-full border rounded px-2 py-1"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block mb-1">Daftar Produk</label>
              {form.produk.map((p, idx) => (
                <div key={idx} className="flex gap-2 mb-1">
                  <input
                    type="text"
                    name="nama"
                    value={p.nama}
                    onChange={e => handleFormChange(e, idx)}
                    className="border rounded px-2 py-1 flex-1"
                    placeholder="Nama Produk"
                    required
                  />
                  <input
                    type="number"
                    name="jumlah"
                    value={p.jumlah}
                    onChange={e => handleFormChange(e, idx)}
                    className="border rounded px-2 py-1 w-20"
                    placeholder="Jumlah"
                    min={1}
                    required
                  />
                  {form.produk.length > 1 && (
                    <button
                      type="button"
                      className="bg-red-500 text-white px-2 rounded"
                      onClick={() => handleRemoveProduk(idx)}
                    >-</button>
                  )}
                </div>
              ))}
              <button
                type="button"
                className="bg-blue-500 text-white px-2 py-1 rounded mt-1"
                onClick={handleAddProduk}
              >+ Produk</button>
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <button
                type="button"
                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
                onClick={handleCancel}
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

export default Packing