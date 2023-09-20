import "./topbar.css"
// import img from "./image/img2.jpg"

export default function TopBar(){
  return (
    <div className='top'>
      <div className="topleft">
      <i className="topIcon fa-brands fa-facebook"></i>
      <i className="topIcon fa-brands fa-instagram"></i>
      <i className="topIcon fa-brands fa-twitter"></i>
      <i className="topIcon fa-brands fa-linkedin"></i>
      <i className="topIcon fa-brands fa-github"></i>
      </div>
      <div className="topcenter">
      <ul className="topList">
        <li className="topListItem">HOME</li>
        <li className="topListItem">CAUSE</li>
        <li className="topListItem">EVENTS</li>
        <li className="topListItem">PAGES</li>
        <li className="topListItem">BLOG</li>
        <li className="topListItem">CONTACT</li>
      </ul>
      </div>
      <div className="topright">
    <img className="topImg" src="./image/img2.jpg" alt="No logo" />
        <i className="topSerchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
