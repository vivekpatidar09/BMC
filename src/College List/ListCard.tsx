import { Link } from "react-router-dom";
import "./ListCard.css";
import StarIcon from "@mui/icons-material/Star";

interface listRightType {
  id: number;
  image: string;
  title: string;
  para: string;
}

const listRightCard: listRightType[] = [
  {
    id: 1,
    image: "images/card4img1.png",
    title: "IIM Bangalore - Indian Institute of Management",
    para: "Bangalore, Karnataka | ",
  },
  {
    id: 2,
    image: "images/card4img1.png",
    title: "IIM Bangalore - Indian Institute of Management",
    para: "Bangalore, Karnataka | ",
  },
  {
    id: 3,
    image: "images/card4img1.png",
    title: "IIM Bangalore - Indian Institute of Management",
    para: "Bangalore, Karnataka | ",
  },
  {
    id: 4,
    image: "images/card4img1.png",
    title: "IIM Bangalore - Indian Institute of Management",
    para: "Bangalore, Karnataka | ",
  },
  {
    id: 5,
    image: "images/card4img1.png",
    title: "IIM Bangalore - Indian Institute of Management",
    para: "Bangalore, Karnataka | ",
  },
];

const listRightCard2: listRightType[] = [
  {
    id: 1,
    image: "images/card4img1.png",
    title: "IIM Bangalore - Indian Institute of Management",
    para: "Bangalore, Karnataka | ",
  },
  {
    id: 2,
    image: "images/card4img1.png",
    title: "IIM Bangalore - Indian Institute of Management",
    para: "Bangalore, Karnataka | ",
  },
  {
    id: 3,
    image: "images/card4img1.png",
    title: "IIM Bangalore - Indian Institute of Management",
    para: "Bangalore, Karnataka | ",
  },
  {
    id: 4,
    image: "images/card4img1.png",
    title: "IIM Bangalore - Indian Institute of Management",
    para: "Bangalore, Karnataka | ",
  },
  {
    id: 5,
    image: "images/card4img1.png",
    title: "IIM Bangalore - Indian Institute of Management",
    para: "Bangalore, Karnataka | ",
  },
  {
    id: 6,
    image: "images/card4img1.png",
    title: "IIM Bangalore - Indian Institute of Management",
    para: "Bangalore, Karnataka | ",
  },
  {
    id: 7,
    image: "images/card4img1.png",
    title: "IIM Bangalore - Indian Institute of Management",
    para: "Bangalore, Karnataka | ",
  },
  {
    id: 8,
    image: "images/card4img1.png",
    title: "IIM Bangalore - Indian Institute of Management",
    para: "Bangalore, Karnataka | ",
  },
  {
    id: 9,
    image: "images/card4img1.png",
    title: "IIM Bangalore - Indian Institute of Management",
    para: "Bangalore, Karnataka | ",
  },
  {
    id: 10,
    image: "images/card4img1.png",
    title: "IIM Bangalore - Indian Institute of Management",
    para: "Bangalore, Karnataka | ",
  },
  {
    id: 11,
    image: "images/card4img1.png",
    title: "IIM Bangalore - Indian Institute of Management",
    para: "Bangalore, Karnataka | ",
  },
];

interface ListDataType {
  id: number;
  p: string;
  code: string;
}

const Listcard: ListDataType[] = [
  {
    id: 1,
    p: "B.Tech. (Bachelor of Technology)",
    code: "(10)",
  },
  {
    id: 2,
    p: "M.Com. (Master of Commerce)",
    code: "(15)",
  },
  {
    id: 3,
    p: "B.Arch. (Bachelor of Architecture)",
    code: "(18)",
  },
  {
    id: 4,
    p: "M.Arch. (Master of Architecture",
    code: "(8)",
  },
];

const ListCard2: ListDataType[] = [
  {
    id: 1,
    p: "Andhra Pradesh",
    code: "(10)",
  },
  {
    id: 2,
    p: "Arunachal Pradesh",
    code: "(14)",
  },
  {
    id: 3,
    p: "Assam",
    code: "(12)",
  },
  {
    id: 4,
    p: "Bihar",
    code: "(11)",
  },
  {
    id: 5,
    p: "Chhattisgarh",
    code: "(16)",
  },
  {
    id: 6,
    p: "Goa",
    code: "(13)",
  },
  {
    id: 7,
    p: "Gujarat",
    code: "(8)",
  },
  {
    id: 8,
    p: "Haryana",
    code: "(8)",
  },
  {
    id: 9,
    p: "Himachal Pradesh",
    code: "(8)",
  },
];

const ListCard3: ListDataType[] = [
  {
    id: 1,
    p: "24Pgns(N)",
    code: "(10)",
  },
  {
    id: 2,
    p: "24Pgns(S)",
    code: "(14)",
  },
  {
    id: 3,
    p: "Abohar",
    code: "(12)",
  },
  {
    id: 4,
    p: "Abu Road",
    code: "(11)",
  },
  {
    id: 5,
    p: "Adilabad",
    code: "(16)",
  },
  {
    id: 6,
    p: "Adoni",
    code: "(13)",
  },
];

const ListCard4: ListDataType[] = [
  {
    id: 1,
    p: "Distance Learning",
    code: "(10)",
  },
  {
    id: 2,
    p: "Part Time",
    code: "(14)",
  },
  {
    id: 3,
    p: "Regular",
    code: "(12)",
  },
];

const ListCard5: ListDataType[] = [
  {
    id: 1,
    p: "Commerce",
    code: "(10)",
  },
  {
    id: 2,
    p: "Computer Application",
    code: "(14)",
  },
  {
    id: 3,
    p: "Accounting",
    code: "(12)",
  },
  {
    id: 4,
    p: "Computer",
    code: "(11)",
  },
  {
    id: 5,
    p: "Finance",
    code: "(16)",
  },
  {
    id: 6,
    p: "Taxation",
    code: "(13)",
  },
];

const ListCard6: ListDataType[] = [
  {
    id: 1,
    p: "Govt",
    code: "(10)",
  },
  {
    id: 2,
    p: "Private",
    code: "(14)",
  },
  {
    id: 3,
    p: "Public",
    code: "(12)",
  },
];

const ListCard7: ListDataType[] = [
  {
    id: 1,
    p: "CMAT",
    code: "(10)",
  },
  {
    id: 2,
    p: "12th, Commerce, Delhi University",
    code: "(14)",
  },
  {
    id: 3,
    p: "12th, Arts, Delhi University",
    code: "(12)",
  },
  {
    id: 4,
    p: "12th, Exam",
    code: "(8)",
  },
  {
    id: 5,
    p: "CAT",
    code: "(11)",
  },
  {
    id: 6,
    p: "MAT",
    code: "(9)",
  },
];

const ListCard8: ListDataType[] = [
  {
    id: 1,
    p: "Less than 1 Lakh",
    code: "(650)",
  },
  {
    id: 2,
    p: "I to 2 Lokh",
    code: "(350)",
  },
  {
    id: 3,
    p: "2 to 3 Lakh",
    code: "(240)",
  },
  {
    id: 4,
    p: "3 to 4 Lach",
    code: "(320)",
  },
  {
    id: 5,
    p: "4 to 5 Lakh",
    code: "(410)",
  },
  {
    id: 6,
    p: "Greater than 5 Lakh",
    code: "(115)",
  },
];

function ListCard() {
  return (
    <div className="list-card">
      {/* LEFT COLUMN  */}
      <div className="l-div">
        <div className="card">
          <h3 style={{ marginLeft: "10px" }}>DEGREE</h3>
          <hr />
          <div className="search-box">
            <div>
              <input type="text" placeholder="Search" className="search" />
            </div>
            <div className="data">
              {Listcard.map((p) => {
                return (
                  <div key={p.id}>
                    <div className="row">
                      <input type="checkbox" className="checkbox" />
                      <p>{p.p}</p>
                      <p>{p.code}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="card">
          <h3 style={{ marginLeft: "10px" }}>STATE</h3>
          <hr />
          <div className="search-box">
            <div>
              <input type="text" placeholder="Search" className="search" />
            </div>
            <div className="data">
              {ListCard2.map((p) => {
                return (
                  <div key={p.id}>
                    <div className="row">
                      <div style={{ display: "flex" }}>
                        <input type="checkbox" className="checkbox" />
                        <p>{p.p}</p>
                      </div>
                      <p>{p.code}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="card">
          <h3 style={{ marginLeft: "10px" }}>CITY</h3>
          <hr />
          <div className="search-box">
            <div>
              <input type="text" placeholder="Search" className="search" />
            </div>
            <div className="data">
              {ListCard3.map((p) => {
                return (
                  <div key={p.id}>
                    <div className="row">
                      <div style={{ display: "flex" }}>
                        <input type="checkbox" className="checkbox" />
                        <p>{p.p}</p>
                      </div>
                      <p>{p.code}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="card">
          <h3 style={{ marginLeft: "10px" }}>STUDY MODE</h3>
          <hr />
          <div className="search-box">
            <div>
              <input type="text" placeholder="Search" className="search" />
            </div>
            <div className="data">
              {ListCard4.map((p) => {
                return (
                  <div key={p.id}>
                    <div className="row">
                      <div style={{ display: "flex" }}>
                        <input type="checkbox" className="checkbox" />
                        <p>{p.p}</p>
                      </div>
                      <p>{p.code}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="card">
          <h3 style={{ marginLeft: "10px" }}>SPECIALIZATION</h3>
          <hr />
          <div className="search-box">
            <div>
              <input type="text" placeholder="Search" className="search" />
            </div>
            <div className="data">
              {ListCard5.map((p) => {
                return (
                  <div key={p.id}>
                    <div className="row">
                      <div style={{ display: "flex" }}>
                        <input type="checkbox" className="checkbox" />
                        <p>{p.p}</p>
                      </div>
                      <p>{p.code}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="card">
          <h3 style={{ marginLeft: "10px" }}>INSTITUTE TYPE</h3>
          <hr />
          <div className="search-box">
            <div>
              <input type="text" placeholder="Search" className="search" />
            </div>
            <div className="data">
              {ListCard6.map((p) => {
                return (
                  <div key={p.id}>
                    <div className="row">
                      <div style={{ display: "flex" }}>
                        <input type="checkbox" className="checkbox" />
                        <p>{p.p}</p>
                      </div>
                      <p>{p.code}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="card">
          <h3 style={{ marginLeft: "10px" }}>EXAM</h3>
          <hr />
          <div className="search-box">
            <div>
              <input type="text" placeholder="Search" className="search" />
            </div>
            <div className="data">
              {ListCard7.map((p) => {
                return (
                  <div key={p.id}>
                    <div className="row">
                      <div style={{ display: "flex" }}>
                        <input type="checkbox" className="checkbox" />
                        <p>{p.p}</p>
                      </div>
                      <p>{p.code}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="card">
          <h3 style={{ marginLeft: "10px" }}>FEE RENGE</h3>
          <hr />
          <div className="search-box">
            <div>
              <input type="text" placeholder="Search" className="search" />
            </div>
            <div className="data">
              {ListCard8.map((p) => {
                return (
                  <div key={p.id}>
                    <div className="row">
                      <div style={{ display: "flex" }}>
                        <input type="checkbox" className="checkbox" />
                        <p>{p.p}</p>
                      </div>
                      <p>{p.code}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* RIGHT COLUMN  */}
      <div className="r-div">
        {listRightCard.map((x) => {
          return (
            <div key={x.id} className="card2">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="col1">
                  <div className="row1">
                    <img src={x.image} alt="" />
                    <h4>{x.title}</h4>
                  </div>

                  <div className="row2">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <p>
                        {x.para}
                        <StarIcon className="starIcon" /> 10/10
                      </p>
                    </div>
                  </div>
                  <p>IIM Bangalore Fees</p>
                </div>
                <div className="btns">
                  <Link to="/info">
                    <button>Apply now</button>
                    <button>Get free counseling</button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
        <div className="card3">
          <h3>Quick Filter</h3>
          <div className="btns">
            <button>Commerce (6263) </button>
            <button>Computer Application (832)</button>
            <button>Accounting (506)</button>
            <button>Computer (230)</button>
            <button>Finance (204)</button>
          </div>
          <hr />
        </div>
        {listRightCard2.map((x) => {
          return (
            <div key={x.id} className="card2">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="col1">
                  <div className="row1">
                    <img src={x.image} alt="" />
                    <h4>{x.title}</h4>
                  </div>

                  <div className="row2">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <p>
                        {x.para}
                        <StarIcon className="starIcon" /> 10/10
                      </p>
                    </div>
                  </div>
                  <p>IIM Bangalore Fees</p>
                </div>
                <div className="btns">
                  <Link to="/info">
                    <button>Apply now</button>
                    <button>Get free counseling</button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
        <button className="read-btn">Read More</button>
      </div>
    </div>
  );
}

export default ListCard;
