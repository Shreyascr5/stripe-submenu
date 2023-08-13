import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGLobalContext } from "./context";

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGLobalContext();
  const displaySubmenu=(e)=>{
    const page=e.target.textContent;
    const tempBtn=e.target.getBoundingClientRect();
    console.log(tempBtn);//from that we get middle, center
    const center=(tempBtn.left+tempBtn.right)/2;
    const bottom=tempBtn.bottom-3;

    openSubmenu(page,{center,bottom});
  }
  //to mouseOut handleSubmenu is used 
  const handleSubmenu=(e)=>{
    if(!e.target.classList.contains("link-btn")){
      closeSubmenu();
    }
  }
  return <nav className="nav" onMouseOver={handleSubmenu}>
    <div className="nav-center">
      <div className="nav-header">
<img src={logo} alt="stripe"  className="nav-logo"/>
<button className="btn toggle-btn" onClick={openSidebar}>
  <FaBars />
</button>
      </div>
      <ul className="nav-links">
        <li>
          <button onMouseOver={displaySubmenu} className="link-btn">
            products
          </button>
        </li>
        <li> <button onMouseOver={displaySubmenu}  className="link-btn">
            developers
          </button></li>
          <li><button onMouseOver={displaySubmenu}  className="link-btn">
            company
          </button></li>
      </ul>
      <button className="btn signin-btn">Sign in</button>
    </div>
  </nav>;
};

export default Navbar;
