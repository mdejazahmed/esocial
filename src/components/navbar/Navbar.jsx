import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';

import "./navbar.scss";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function Navbar() {
const {darkMode,toggle}=useContext(ThemeContext)

const toggleTheme=()=>{
  toggle()
}

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{textDecoration:"none"}}>
          <span>Esocial</span>
        </Link>
        <HomeOutlinedIcon/>
        {darkMode?<WbSunnyOutlinedIcon onClick={toggleTheme}/>:<DarkModeOutlinedIcon onClick={toggleTheme}/>}
        <GridViewOutlinedIcon/>
        <div className="search">
          <SearchOutlinedIcon/>
          <input type="search" placeholder="Search by name,email or contact"/>
        </div>
      </div>
      <div className="right">
        <PersonOutlineOutlinedIcon/>
        <EmailOutlinedIcon/>
        <NotificationsOutlinedIcon/>
        <div className="user">
          <img src="https://res.cloudinary.com/dxxh8iica/image/upload/v1681115587/Ccbp/no-profile-picture-icon_l9m8bh.webp" alt="userImg" />
          <span>Md Ejaz</span>
        </div>
      </div>
    </div>
  );
}
