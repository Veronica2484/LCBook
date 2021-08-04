import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="container-fluid p-2 text-center">
      <p>Copyright ⓒ VC {currentYear}</p>
    </footer>
  )
}

export default Footer
