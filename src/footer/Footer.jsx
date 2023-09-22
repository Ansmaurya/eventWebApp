import React from 'react'
import './footer.css'
import fimg from "./carousel3.jpg";

function Footer() {
  return (
    <div className="footer">
    <div className="row">
        <div className="col-sm-3">
        
        <span className="footerTitle">ABOUT US</span>
        <div className="sb_footer-links-div">
        <p className='card-text'>There are many variations of passages of Lorem Ipsum available, but the.There are many variations of passages</p>
        <i className="fi fi-brands-facebook"></i>
        <i className="fi fi-brands-twitter"></i>
        <i className="fi fi-brands-google"></i>
        <i className="fi fi-brands-apple"></i>
        </div>
      </div>
      <div className="col-sm-3">
      <span className="footerTitle">IMPORTANT INFO</span>
      <div className="sb_footer-links-div">
      <ul className='fList'>
        <li>About Us</li>
        <li>Annual Reports</li>
        <li>Our Approch</li>
        <li>Statistics</li>
      </ul>
      </div>
      </div>
      <div className="col-sm-3">
      <span className="footerTitle">IMPORTANT LINKS</span>
      <div className="sb_footer-links-div">
      <ul className='fList'>
        <li>Donate</li>
        <li>Media Resurces</li>
        <li>Quick Contact</li>
        <li>Address</li>
      </ul>
      </div>
      </div>
      <div className="col-sm-3">
      <span className="footerTitle">INSTAGRAM FEED</span>
      <div id="bar">
  <table className="BarTable" >
    <tr>
      <td className="my-class"><img src={fimg} alt=""style={{width:70,height:70,margin:5}} /></td>
      <td className="my-class"><img src={fimg} alt=""style={{width:70,height:70,margin:5}} /></td>
      <td className="my-class"><img src={fimg} alt=""style={{width:70,height:70,margin:5}} /></td>
      
    </tr>
    <tr>
      <td className="my-class"><img src={fimg} alt="" style={{width:70,height:70,margin:5}}/></td>
      <td className="my-class"><img src={fimg} alt="" style={{width:70,height:70,margin:5}}/></td>
      <td className="my-class"><img src={fimg} alt=""style={{width:70,height:70,margin:5}} /></td>
     
       
    </tr>
  </table>
  </div>
</div>

     <div className="footerbottom">
      <span>Copyright © Trust 2021 . ALL Right Reserved .</span>
      </div>
      </div>
      </div>
      

     
     
   
  )
}

export default Footer
