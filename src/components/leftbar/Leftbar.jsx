import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';

import "./leftbar.scss";

export default function Leftbar() {
  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src="https://res.cloudinary.com/dxxh8iica/image/upload/v1681115587/Ccbp/no-profile-picture-icon_l9m8bh.webp" alt="userImg" />
            <span>Md Ejaz</span>
          </div>
          <div className="item">
            <Diversity3OutlinedIcon />
            <span>Friends</span>
          </div>
          <div className="item">
            <EventOutlinedIcon />
            <span>Events</span>
          </div>
          <div className="item">
            <SportsEsportsOutlinedIcon />
            <span>Gaming</span>
          </div>
          <div className="item">
            <CollectionsOutlinedIcon />
            <span>Gallery</span>
          </div>
          
        </div>
        <hr/>
        <div className="menu">
        <span>Your Shorcuts</span>
        <div className="item">
            <OndemandVideoOutlinedIcon />
            <span>Videos</span>
          </div>
          <div className="item">
            <SchoolOutlinedIcon />
            <span>Courses</span>
          </div>
          <div className="item">
            <SavingsOutlinedIcon />
            <span>Fund</span>
          </div>
        </div>
        <hr/>
        <div className="menu">
        <span>Others</span>
        <div className="item">
            <OndemandVideoOutlinedIcon />
            <span>Videos</span>
          </div>
          <div className="item">
            <SchoolOutlinedIcon />
            <span>Courses</span>
          </div>
          <div className="item">
            <SavingsOutlinedIcon />
            <span>Fund</span>
          </div>
        <div className="item">
            <OndemandVideoOutlinedIcon />
            <span>Videos</span>
          </div>
          <div className="item">
            <SchoolOutlinedIcon />
            <span>Courses</span>
          </div>
          <div className="item">
            <SavingsOutlinedIcon />
            <span>Fund</span>
          </div>
        <div className="item">
            <OndemandVideoOutlinedIcon />
            <span>Videos</span>
          </div>
          <div className="item">
            <SchoolOutlinedIcon />
            <span>Courses</span>
          </div>
          <div className="item">
            <SavingsOutlinedIcon />
            <span>Fund</span>
          </div>
        <div className="item">
            <OndemandVideoOutlinedIcon />
            <span>Videos</span>
          </div>
          <div className="item">
            <SchoolOutlinedIcon />
            <span>Courses</span>
          </div>
          <div className="item">
            <SavingsOutlinedIcon />
            <span>Fund</span>
          </div>
        </div>
      </div>
    </div>
  );
}
