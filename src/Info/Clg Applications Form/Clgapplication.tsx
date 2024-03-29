import "./Clgapplication.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import StarIcon from "@mui/icons-material/Star";

function Clgapplication() {
  interface dataType {
    id: number;
    span: string;
    university: string;
    location: string;
    placement: string;
    package: string;
  }

  const Data: dataType[] = [
    {
      id: 1,
      span: "Best in Infrastructure",
      university: "MIT World Peace University - MIT -....",
      location: "Pune, Maharashtra",
      placement: "100% Placement Assistan",
      package: "51.36 LPA Highest CTC",
    },
    {
      id: 2,
      span: "Best in Infrastructure",
      university: "MIT World Peace University - MIT -....",
      location: "Pune, Maharashtra",
      placement: "100% Placement Assistan",
      package: "51.36 LPA Highest CTC",
    },
    {
      id: 3,
      span: "Best in Infrastructure",
      university: "MIT World Peace University - MIT -....",
      location: "Pune, Maharashtra",
      placement: "100% Placement Assistan",
      package: "51.36 LPA Highest CTC",
    },
    {
      id: 4,
      span: "Best in Infrastructure",
      university: "MIT World Peace University - MIT -....",
      location: "Pune, Maharashtra",
      placement: "100% Placement Assistan",
      package: "51.36 LPA Highest CTC",
    },
    {
      id: 5,
      span: "Best in Infrastructure",
      university: "MIT World Peace University - MIT -....",
      location: "Pune, Maharashtra",
      placement: "100% Placement Assistan",
      package: "51.36 LPA Highest CTC",
    },
  ];

  return (
    <div className="clg-app">
      <h2 style={{ fontWeight: "500" }}>Colleges Application Forms 2024</h2>
      <div style={{ display: "flex", overflowX: "scroll" }}>
        {Data.map((x) => {
          return (
            <div className="card" key={x.id}>
              <div className="col1">
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <p>
                    <StarIcon
                      style={{
                        color: "#F8D64E",
                        fontSize: "13px",
                        margin: "0 3px",
                      }}
                    />
                    6.2
                  </p>
                </div>
                
                <div>
                  <img src="/images/page3card1img2.png" alt="" />
                </div>
              </div>
              <div className="cardData">
                <span>{x.span}</span>
                <p>{x.university}</p>
                <p>{x.location}</p>
                <p>{x.placement}</p>
                <p>{x.package}</p>
                <button>
                  <ArrowForwardIcon
                    style={{ marginRight: "5px", fontSize: "20px" }}
                  />{" "}
                  Apply Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Clgapplication;
