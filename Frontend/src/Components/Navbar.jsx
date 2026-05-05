import { IoMenu } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa6";
import './Navbar.css';

function Navbar(){
  return(
    <nav>
      <div className="title">
        <IoMenu size={30} className="menu"/>
        <h1>
          AnimeZ
        </h1>
      </div>
      <div className="search">
        <input type="search" name="anime-name" id="anime-name" className="search-anime"/>
        <IoSearch className="search-icon"/>
      </div>
      <FaRegBell size={20} className="notifi"/>
    </nav>
  );
}

export default Navbar;