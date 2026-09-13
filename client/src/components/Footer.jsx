import React from 'react'

function Footer() {
  return (
    <footer className="w-full border-t border-gray-300 shadow-inner bg-[var(--bg-color)] text-[var(--text-color)] py-4 px-4 flex items-center justify-center">
      <p className="text-center text-sm font-medium">
        © {new Date().getFullYear()} PasteBox. All rights reserved.
      </p>
    </footer>
  );
}


export default Footer
