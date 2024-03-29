import "./Index.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import PushPinIcon from '@mui/icons-material/PushPin';
import StarIcon from '@mui/icons-material/Star';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import BusinessIcon from '@mui/icons-material/Business';

function InfoPoster() {
  return (
    <div className="infoposter">
      <div className="posterdata">
        <img src="/images/card5img2.png" alt="" />
        <div className="col2">
          <div className="row1">
            <p>Home</p>
            <NavigateNextIcon className="arrow" />
            <p>Banglore</p>
            <NavigateNextIcon className="arrow" />
            <p>IIM Bangalore</p>
          </div>
          <div className="row2">
            <h4>
              IIM Bangalore (IIMB): Indian Institute of Management Bangalore
            </h4>
          </div>
          <div className="row3">
            <p> <FmdGoodIcon className="icon"/> Bangalore, Karnataka</p>
            <p> <BookmarkBorderOutlinedIcon className="icon"/> AICTE, UGC</p>
            <p><PushPinIcon className="icon"/> Estd 1973</p>
            <p><StarIcon className="icon"/> Autonomous University</p>
            <p><HelpOutlineIcon className="icon"/> 238 Questions Answered</p>
            <p><BusinessIcon className="icon"/> Ranked 3 For MBA By Indiatoday</p>
          </div>
          <div className="row4">
            <p>2023 <span style={{color:'#FF5C00'}}>+31 More</span></p>
          </div>
          <div className="row5">
            <p><img src="/images/ticketicon.png"/>Admission Predictor</p>
            <p><img src="/images/contactdetailicon.png"/>Get Contact Details</p>
          </div>
        </div>
        <div className="form">
          <h3>Get Started For Free !</h3>
          <div className="forminput">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Contact" />
            <input type="text" placeholder="Specialization" />
            <input type="text" placeholder="City/State" />
          </div>
          <button>SEND MESSAGE</button>
        </div>
      </div>
    </div>
  );
}

export default InfoPoster;
