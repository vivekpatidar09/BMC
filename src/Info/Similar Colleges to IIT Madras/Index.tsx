import "./Index.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Index() {
  interface dataType {
    id: number;
    span: string;
    sub: string;
    fees: string;
    all: string;
    package: string;
  }

  const Data: dataType[] = [
    {
      id: 1,
      span: "Best in Infrastructure",
      sub: "BE/B.Tech    ",
      fees: "₹80 KFirst Year Fees",
      all: "View All Courses & Fees",
      package: "51.36 LPA Highest CTC",
    },
    {
      id: 2,
      span: "Best in Infrastructure",
      sub: "BE/B.Tech    ",
      fees: "₹80 KFirst Year Fees",
      all: "View All Courses & Fees",
      package: "51.36 LPA Highest CTC",
    },
    {
      id: 3,
      span: "Best in Infrastructure",
      sub: "BE/B.Tech    ",
      fees: "₹80 KFirst Year Fees",
      all: "View All Courses & Fees",
      package: "51.36 LPA Highest CTC",
    },
    {
      id: 4,
      span: "Best in Infrastructure",
      sub: "BE/B.Tech    ",
      fees: "₹80 KFirst Year Fees",
      all: "View All Courses & Fees",
      package: "51.36 LPA Highest CTC",
    },
    {
      id: 5,
      span: "Best in Infrastructure",
      sub: "BE/B.Tech    ",
      fees: "₹80 KFirst Year Fees",
      all: "View All Courses & Fees",
      package: "51.36 LPA Highest CTC",
    },
  ];

  return (
    <div className="similar-clg">
      <h3>Similar Colleges to IIT Madras</h3>
      <hr />
      <div style={{display:'flex', flexWrap:'wrap'}}>
        {Data.map((x) => {
          return (
            <div className="card" key={x.id}>
              <div className="col1">
                <div className="row1">
                  <div>
                    <button>+ Follow</button>
                  </div>
                  <div>
                    <p>Reviews Rating</p>
                    <p>
                      <FavoriteBorderIcon
                        style={{ fontSize: "10px", margin: "3px" }}
                      />
                      8.4/10
                    </p>
                  </div>
                </div>
                <div className="row2">
                  <img src="/images/clg_logo.png" alt="" />
                  <div className="line">
                    <h6>
                      College of Engineering Guindy: Admission 2024, Courses
                    </h6>
                    <p>
                      <LocationOnIcon
                        style={{ fontSize: "11px", margin: "3px" }}
                      />
                      Channai, Tamil Nadu
                    </p>
                  </div>
                </div>
              </div>
              <div className="cardData">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <h4>{x.sub}</h4>
                  </div>
                  <div className="rate">
                    <p>7.4</p>
                  </div>
                </div>
                <p> {x.fees}</p>
                <p>{x.all}</p>
                <button>Download Brochure</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Index;
