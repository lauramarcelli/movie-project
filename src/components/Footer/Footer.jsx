import React from 'react'
import "./Footer.css"

export default function Footer() {
  return (
    <>
    <footer className="d-flex mt-2 footer">
  <div className='p-2 flex-fill'>
    <a href="https://github.com/lauramarcelli">LauraM</a>
    <span>&copy; 2024 Laura Marcelli.</span>
  </div>
  <div className='p-2 flex-fill'>
    <span>Powered by</span>
    <a  href="https://vercel.com/">Vercel</a>
  </div>
</footer>
    </>
  )
}
