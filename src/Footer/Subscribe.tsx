import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import "./Subscribe.css";

function Subscribe() {
  return (
    <div>
      <div className="subscribe">
        <h2>Subscribe To Our News Letter</h2>
        <p>Get College Notifications, Exam Notifications and News Updates</p>
        <div className="navbtn">
          <button>
            <MailOutlineIcon
              style={{ marginRight: "10px", color: "#b1a9a9" }}
            />{" "}
            Enter your email id
          </button>
          <button>
            <CallOutlinedIcon
              style={{ marginRight: "10px", color: "#b1a9a9" }}
            />{" "}
            Enter your mobile no
          </button>
          <button>
            <SchoolOutlinedIcon
              style={{ marginRight: "10px", color: "#b1a9a9" }}
            />
            <select>
              <option value="">Choose your course</option>
            </select>
          </button>
          <button className="submit">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
