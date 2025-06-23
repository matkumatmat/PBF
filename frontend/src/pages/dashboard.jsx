import React from 'react'

const DashboardMobile = () => {
  return (
    <div className="block md:hidden p-4 mt-16">
      {/* Ringkasan statistik */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-primary text-white rounded-lg p-4 flex flex-col items-center">
          <span className="material-icons text-3xl mb-2">inventory_2</span>
          <span className="text-lg font-bold">120</span>
          <span className="text-xs">Total Stock</span>
        </div>
        <div className="bg-green-500 text-white rounded-lg p-4 flex flex-col items-center">
          <span className="material-icons text-3xl mb-2">local_shipping</span>
          <span className="text-lg font-bold">35</span>
          <span className="text-xs">Packing</span>
        </div>
        <div className="bg-yellow-500 text-white rounded-lg p-4 flex flex-col items-center">
          <span className="material-icons text-3xl mb-2">bar_chart</span>
          <span className="text-lg font-bold">8</span>
          <span className="text-xs">Report</span>
        </div>
        <div className="bg-red-500 text-white rounded-lg p-4 flex flex-col items-center">
          <span className="material-icons text-3xl mb-2">warning</span>
          <span className="text-lg font-bold">2</span>
          <span className="text-xs">Out of Stock</span>
        </div>
      </div>
      {/* Grafik sederhana */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <h2 className="font-semibold mb-2">Stock Trend</h2>
        <svg width="100%" height="60">
          <polyline
            fill="none"
            stroke="#34a853"
            strokeWidth="3"
            points="0,50 20,40 40,45 60,30 80,35 100,20 120,25"
          />
        </svg>
      </div>
      {/* Tabel ringkas */}
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="font-semibold mb-2">Recent Activity</h2>
        <table className="w-full text-xs">
          <thead>
            <tr>
              <th className="text-left py-1">Item</th>
              <th className="text-left py-1">Status</th>
              <th className="text-left py-1">Qty</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Item A</td>
              <td>Added</td>
              <td>+10</td>
            </tr>
            <tr>
              <td>Item B</td>
              <td>Packed</td>
              <td>-5</td>
            </tr>
            <tr>
              <td>Item C</td>
              <td>Out</td>
              <td>-2</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DashboardMobile