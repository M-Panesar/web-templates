import burger from "./burger.jpg";
import './Header.css';
// import Explore from "./Explore";

function Header(){
  // const explore = () =>{
  //   return(
  //     <Explore />
  //   )
  // } 
  return(
    <div class="Header">
      <div>
        <img src={burger} className="image" alt="burger" />
      </div>
      <div class="heading">
        <div class="links">
          <ul>
            <li><a href="#">Toppings</a></li>
            <li><a href="#">Bread</a></li>
            <li><a href="#">Non-Veg</a></li>
            <li><a href="#">Veg</a></li>
          </ul>
        </div>

        <div class="main-heading">  
          <h1>Create your own burger!!</h1>
          <p>This is a clone website using lorem ipsum about baking out your own burgers, etc....</p>
          {/* <button className="button" onClick={explore}>Explore <ion-icon name="arrow-redo-outline"></ion-icon></button> */}
          <button className="button">Explore</button>
        </div>
        <div class="about-us">
          <a href="#">About us</a>
        </div>
      </div>
    </div>
  );
}

export default Header;