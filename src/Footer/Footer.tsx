import "./Footer.css";
import facebook from "/images/facebook_icon.svg";
import insta from "/images/icon _Instagram.svg";
import twitter from "/images/icon _Twitter.svg";
import youtube from "/images/icon _youtube.svg";
import linkedin from "/images/icon _linkedin.svg";
import wifi from "/images/icon _WiFi.svg";
import Subscribe from "./Subscribe";

interface footType {
  id: number;
  title: string;
  sub: string;
  sub1: string;
  sub2: string;
  sub3: string;
  sub4: string;
  sub5: string;
  sub6: string;
}

const footData: footType[] = [
  {
    id: 1,
    title: "Top Colleges",
    sub: "M.B.A",
    sub1: "B.Tech/B.E",
    sub2: "MCA",
    sub3: "BCA",
    sub4: "M.Tech",
    sub5: "MA",
    sub6: "BA",
  },
  {
    id: 2,
    title: "Top Universities",
    sub: "Engineering",
    sub1: "Management",
    sub2: "Medical",
    sub3: "Law",
    sub4: "Commerce",
    sub5: "Science",
    sub6: "Arts",
  },
  {
    id: 3,
    title: "Top Exam",
    sub: "CAT",
    sub1: "GATE",
    sub2: "Jee-Main",
    sub3: "NEET",
    sub4: "ΧΑΤ",
    sub5: "CLAT",
    sub6: "MAT",
  },
  {
    id: 4,
    title: "Study Abroad",
    sub: "Canada",
    sub1: "USA",
    sub2: "UK",
    sub3: "UAE",
    sub4: "Australia",
    sub5: "Germany",
    sub6: "Sweden",
  },
  {
    id: 5,
    title: "",
    sub: "Ireland",
    sub1: "New Zealand",
    sub2: "Hong Kong",
    sub3: "Singapore",
    sub4: "Malaysia",
    sub5: "Netherlands",
    sub6: "Italy",
  },
  {
    id: 6,
    title: "Board Exams",
    sub: "CBSE Class 12",
    sub1: "CBSE Class 12th Results",
    sub2: "CBSE Class 12th Syllabus",
    sub3: "CBSE Class 12th Exam Dates",
    sub4: "CBSE Class 10",
    sub5: "CBSE Class 10th Result",
    sub6: "CBSE Class 10th Syllabus",
  },
];

function Footer() {
  return (
    <>
      <Subscribe/>
      <div className="footer">
        <div className="col1">
          {footData.map<JSX.Element>((x) => {
            return (
              <div key={x.id} className="row1">
                <h4>{x.title}</h4>
                <p>{x.sub}</p>
                <p>{x.sub1}</p>
                <p>{x.sub2}</p>
                <p>{x.sub3}</p>
                <p>{x.sub4}</p>
                <p>{x.sub5}</p>
                <p>{x.sub6}</p>
              </div>
            );
          })}
        </div>
        <hr />
        <div className="col2">
          <h4>Other Links</h4>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="row1">
              <p>About Collegedunia</p>
              <p>Contact Us</p>
              <p>Advertising</p>
              <p>Career</p>
              <p>Terms & Conditions</p>
            </div>
            <div className="icons">
              <img src={insta} alt="" />
              <img src={facebook} alt="" />
              <img src={twitter} alt="" />
              <img src={youtube} alt="" />
              <img src={linkedin} alt="" />
              <img src={wifi} alt="" />
            </div>
          </div>
        </div>
        <hr />
        <div className="col3">
          <div className="row1">
            <h4>LOGO</h4>
            <p>© 2023 Company Web Pvt. Ltd. All Rights Reserved</p>
          </div>
          <div className="row2">
            <p>Download the Company app on</p>
            <img src="/images/playstore.png" alt="" />
            <img src="/images/appstore.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
