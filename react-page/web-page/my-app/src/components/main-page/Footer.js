// import '../node_modules/font-awesome/css/font-awesome.min.css'; 
// import { IconName } from "react-icons/fa";
import Icon from "./icon.jpg";
import './Footer.css';

function Footer() {
  return (
    <div className="Footer">    
      <div className='Footer-icon-div'>
        <img src={Icon} className="icon" alt="icon"/>
        <h4>Burger-in-Progress</h4>
        {/* <br></br> */}
        <p>lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
        <br></br>
        <p> @2020-2022 food in making</p>
      </div>
      <div className="links">
        <div className="quick-links">
          <h4>Quick Links</h4>
          
          <a href="#">Home</a>
          <a href="#">Featured Food</a>
          <a href="#">Stores</a>
          <a href="#">Menu</a>

        </div>
        <div className="support-links">
          <h4>Support</h4>
          
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of use</a>
          <a href="#">FAQs</a>

        </div>
        <div className="contact-links">
          <h4>Contact</h4>
          
          <a href="#">Location </a>
          <a href="#">Number</a>
          <a href="#">Mail-address</a>

        </div>
        <div className="more-links">
          <h4>Follow Us On:</h4>
          
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>

        </div>
      </div>
    </div>    
  );
}

export default Footer;