import './header.css'

export default function Header() {
  return (
    <div className='header'>
      <div className="headerTitiles">
        <span className='headerTitileSm'>React & Node</span>
        <span className='headerTitileLg'>Blog</span>
      </div>
      <img className='HeaderImg' src="./image/img3.jpg" alt="No Image" />
    </div>
  )
}
