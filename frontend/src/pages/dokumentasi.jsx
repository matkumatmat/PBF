import React, { useState } from 'react'

// Dummy data pengiriman
const shipments = [
  {
    alamat: "RSUD Bandung",
    daftar: [
      { vaksin: "Vaksin A", jumlah: 20 },
      { vaksin: "Vaksin B", jumlah: 10 }
    ]
  },
  {
    alamat: "Puskesmas Cimahi",
    daftar: [
      { vaksin: "Vaksin C", jumlah: 15 }
    ]
  }
]

const Dokumentasi = () => {
  const [openForm, setOpenForm] = useState(null)
  const [file, setFile] = useState(null)
  const [filename, setFilename] = useState("")

  // Simulasi submit, di backend harus handle upload ke folder sesuai permintaan
  const handleSubmit = (e, alamat) => {
    e.preventDefault()
    const today = new Date()
    const tgl = today.toISOString().slice(0,10).replace(/-/g,"")
    const bulan = today.toLocaleString('id-ID', { month: 'long', year: 'numeric' }).replace(' ', '_')
    const folder = `backend/dokumentasi/${bulan}/${alamat.replace(/\s+/g, '_')}/`
    const pdfName = `${tgl}_${filename || 'dokumentasi'}.pdf`
    alert(`File akan disimpan di:\n${folder}${pdfName}\n\n(Simulasi, implementasi upload di backend)`)
    setOpenForm(null)
    setFile(null)
    setFilename("")
  }

  return (
    <div className="max-w-4xl mx-auto p-4 mt-8 bg-white rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-4">Dokumentasi Pengiriman</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border rounded-lg">
          <thead>
            <tr className="bg-primary text-white">
              <th className="px-4 py-2">Alamat Kirim</th>
              <th className="px-4 py-2">Jenis & Jumlah Vaksin</th>
              <th className="px-4 py-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {shipments.map((item, idx) => (
              <tr key={idx} className="text-center border-b hover:bg-gray-50">
                <td className="px-4 py-2">{item.alamat}</td>
                <td className="px-4 py-2">
                  <ul className="text-left">
                    {item.daftar.map((v, i) => (
                      <li key={i}>{v.vaksin} <span className="text-xs text-gray-500">({v.jumlah})</span></li>
                    ))}
                  </ul>
                </td>
                <td className="px-4 py-2">
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    onClick={() => setOpenForm(idx)}
                  >
                    Upload Dokumentasi
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Form upload */}
      {openForm !== null && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <form
            className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
            onSubmit={e => handleSubmit(e, shipments[openForm].alamat)}
          >
            <h2 className="text-xl font-bold mb-4">Upload Dokumentasi - {shipments[openForm].alamat}</h2>
            <div className="mb-4">
              <label className="block mb-1">Upload Foto/Scan (PDF)</label>
              <input
                type="file"
                accept="application/pdf,image/*"
                onChange={e => setFile(e.target.files[0])}
                className="w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Nama File (opsional)</label>
              <input
                type="text"
                value={filename}
                onChange={e => setFilename(e.target.value)}
                className="w-full border rounded px-2 py-1"
                placeholder="Nama file tanpa ekstensi"
              />
            </div>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
                onClick={() => setOpenForm(null)}
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

export default Dokumentasi