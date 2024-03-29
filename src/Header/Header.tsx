import { useState } from "react";
import "./Header.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import { Link } from "react-router-dom";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="header">
      <div className="h-row-1">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 className="h-logo">LOGO</h1>
        </Link>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search Colleges, Courses, Exam, QnA, & Articles"
          />
          <div>
            <button>Search</button>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <MenuIcon
            className="menu-icon"
            onClick={() => {
              setOpenMenu(true);
            }}
          />
          <span
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "12px",
            }}
          >
            <WhatsAppIcon style={{ margin: "0 5px" }} /> Ask A Query On 000-00
          </span>
        </div>
      </div>

      <div className="h-row-2">
        <div className={openMenu ? "h-nav-btn active" : "h-nav-btn"}>
          <div className="nav-close">
            <div>
              <ClearIcon
                className="close-icon"
                onClick={() => {
                  setOpenMenu(false);
                }}
              />
            </div>
            <div className="nav-btns">
              <div className="selectdiv">
                <select name="" id="">
                  ▼<option value="">MBA</option>
                </select>
              </div>

              <div className="selectdiv">
                <select name="" id="">
                  <option value="">ENGINEERING </option>
                </select>
              </div>

              <div className="selectdiv">
                <select name="" id="">
                  <option value="">MEDICAL </option>
                </select>
              </div>

              <div className="selectdiv">
                <select name="" id="">
                  <option value="">DESIGN</option>
                </select>
              </div>

              <div className="selectdiv">
                <select name="" id="">
                  <option value="">MORE</option>
                </select>
              </div>

              <div className="selectdiv">
                <select name="" id="">
                  <option value="">STUDYABROAD</option>
                </select>
              </div>

              <div className="selectdiv">
                <select name="" id="">
                  <option value="">COUNSELING</option>
                </select>
              </div>

              <div className="selectdiv">
                <select name="" id="">
                  <option value="">LOGO ONLINE</option>
                </select>
              </div>
            </div>
          </div>
          <div className="h-log-sign-btn">
            <button>login</button>
            <button>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
