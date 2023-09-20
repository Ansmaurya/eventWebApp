import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="./image/sideimg1.jpg" alt="No sideImg" />
        <p>September 06, 2021</p>
        <h1>Save The Child</h1>
        <p>Read More </p>
        
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">HAIR STRAIGHTNER 20</li>
          <li className="sidebarListItem">HAIR DRYER  50</li>
          <li className="sidebarListItem">BEARD TRIMMER 30</li>
          <li className="sidebarListItem">HAIR SPRAY  100</li>
          <li className="sidebarListItem">BEARD WAX  33</li>
          <li className="sidebarListItem">HAIR SHINING OIL  20</li>
          
        </ul>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">FOLLOW</span>
      <div className="sidebarSocial">
      <i className="sidebarIcon fa-brands fa-facebook"></i>
      <i className="sidebarIcon fa-brands fa-instagram"></i>
      <i className="sidebarIcon fa-brands fa-twitter"></i>
      {/* <i className="sidebarIcon fa-brands fa-linkedin"></i>
      <i className="sidebarIcon fa-brands fa-github"></i> */}
      </div>

      </div>
    </div>
  )
}
