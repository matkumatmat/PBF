import React from "react"

const MobileMenu = () => (
  <div className="block md:hidden fixed bottom-0 left-0 w-full bg-white shadow-t z-40">
    <nav className="flex justify-around items-center h-14">
      <button className="flex flex-col items-center text-primary focus:text-secondary">
        <span className="material-icons">dashboard</span>
        <span className="text-xs">Dashboard</span>
      </button>
      <button className="flex flex-col items-center text-primary focus:text-secondary">
        <span className="material-icons">inventory_2</span>
        <span className="text-xs">Stock</span>
      </button>
      <button className="flex flex-col items-center text-primary focus:text-secondary">
        <span className="material-icons">local_shipping</span>
        <span className="text-xs">Packing</span>
      </button>
      <button className="flex flex-col items-center text-primary focus:text-secondary">
        <span className="material-icons">settings</span>
        <span className="text-xs">Setting</span>
      </button>
      <button className="flex flex-col items-center text-primary focus:text-secondary">
        <span className="material-icons">folder</span>
        <span className="text-xs">Dokumentasi</span>
      </button>
      <button className="flex flex-col items-center text-primary focus:text-secondary">
        <span className="material-icons">bar_chart</span>
        <span className="text-xs">Report</span>
      </button>
      <button className="flex flex-col items-center text-primary focus:text-secondary">
        <span className="material-icons">logout</span>
        <span className="text-xs">Logout</span>
      </button>
    </nav>
  </div>
)

export default MobileMenu;