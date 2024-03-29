import StarIcon from "@mui/icons-material/Star";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./TopUniversitiesClg.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface clgtype {
  id: number;
  img1: string;
  img2: string;
  title: string;
  titlepara: string;
  head: string;
}

const clgData: clgtype[] = [
  {
    id: 1,
    img1: "/images/card5img3.png",
    img2: "/images/card5img2.png",
    title: "IIM Bangalore - Indian Institute of Management",
    titlepara: "Bangalore, Karnataka | AICTE, UGC",
    head: "MBA/PGDM",
  },
  {
    id: 2,
    img1: "/images/card5img3.png",
    img2: "/images/card5img2.png",
    title: "IIM Bangalore - Indian Institute of Management",
    titlepara: "Bangalore, Karnataka | AICTE, UGC",
    head: "MBA/PGDM",
  },
  {
    id: 3,
    img1: "/images/card5img3.png",
    img2: "/images/card5img2.png",
    title: "IIM Bangalore - Indian Institute of Management",
    titlepara: "Bangalore, Karnataka | AICTE, UGC",
    head: "MBA/PGDM",
  },
];

function SampleNextArrow(props: any) {
  const { style, onClick } = props;
  return (
    <div
      style={{
        ...style,
        top: "50%",
        right: "-23px",
        zIndex: "2",
        backgroundColor: "#fff",
        height: "32px",
        border: "2px solid #e1e1e1",
        cursor: "pointer",
        padding: "2px",
        borderRadius: "50%",
        position: "absolute",
      }}
      onClick={onClick}
    >
      <ArrowForwardIcon style={{ fontSize: "2rem" }} />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { style, onClick } = props;
  return (
    <div
      style={{
        ...style,
        top: "50%",
        left: "-5px",
        zIndex: "2",
        backgroundColor: "#fff",
        height: "32px",
        border: "2px solid #e1e1e1",
        cursor: "pointer",
        padding: "2px",
        borderRadius: "50%",
        position: "absolute",
      }}
      onClick={onClick}
    >
      <ArrowBackIcon style={{ fontSize: "2rem" }} />
    </div>
  );
}

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1266,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};
function TopUniversitiesClg() {
  return (
    <div className="topUniversities-clg">
      <Slider {...settings}>
        {clgData.map((x) => {
          return (
            <div key={x.id} className="card">
              <div className="col1">
                <div className="div1">
                  <img src={x.img1} alt="" />
                </div>
                <div className="div2">
                  <img src={x.img2} alt="" />
                  <div>
                    <h5>{x.title}</h5>
                    <p>{x.titlepara}</p>
                  </div>
                </div>
              </div>
              <div className="col2">
                <div className="row1">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <h5>{x.head}</h5>
                    <p style={{ display: "flex", alignItems: "center" }}>
                      <StarIcon className="starIcon" /> 9.2/10
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <p>
                      <span style={{ color: "#ff5c00" }}>14.50 Lacs </span>{" "}
                      Totel fees
                    </p>
                    <p>74 Reviews</p>
                  </div>
                </div>
                <hr />
                <div className="row2">
                  <p style={{ color: "grey" }}>
                    Ranked 1 out of 50 Financial Express
                  </p>
                  <hr />
                  <a href="">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <p>View All Courses and fees</p>
                      <ArrowForwardIosIcon
                        style={{ margin: "-1px 6px", fontSize: "15px" }}
                      />
                    </div>
                  </a>
                  <hr />
                  <a href="">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <p>Download Brochure</p>
                      <ArrowForwardIosIcon
                        style={{ margin: "-1px 6px", fontSize: "15px" }}
                      />
                    </div>
                  </a>
                  <hr />
                  <a href="">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <p>Compare</p>
                      <ArrowForwardIosIcon
                        style={{ margin: "-1px 6px", fontSize: "15px" }}
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
      <Slider {...settings}>
        {clgData.map((x) => {
          return (
            <div key={x.id} className="card">
              <div className="col1">
                <div className="div1">
                  <img src={x.img1} alt="" />
                </div>
                <div className="div2">
                  <img src={x.img2} alt="" />
                  <div>
                    <h5>{x.title}</h5>
                    <p>{x.titlepara}</p>
                  </div>
                </div>
              </div>
              <div className="col2">
                <div className="row1">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <h5>{x.head}</h5>
                    <p style={{ display: "flex", alignItems: "center" }}>
                      <StarIcon
                        style={{
                          color: "orange",
                          fontSize: "11px",
                          margin: "5px",
                        }}
                      />{" "}
                      9.2/10
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <p>
                      <span style={{ color: "#ff5c00" }}>14.50 Lacs </span>{" "}
                      Totel fees
                    </p>
                    <p>74 Reviews</p>
                  </div>
                </div>
                <hr />
                <div className="row2">
                  <p style={{ color: "grey" }}>
                    Ranked 1 out of 50 Financial Express
                  </p>
                  <hr />
                  <a href="">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <p>View All Courses and fees</p>
                      <ArrowForwardIosIcon
                        style={{ margin: "-1px 6px", fontSize: "15px" }}
                      />
                    </div>
                  </a>
                  <hr />
                  <a href="">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <p>Download Brochure</p>
                      <ArrowForwardIosIcon
                        style={{ margin: "-1px 6px", fontSize: "15px" }}
                      />
                    </div>
                  </a>
                  <hr />
                  <a href="">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <p>Compare</p>
                      <ArrowForwardIosIcon
                        style={{ margin: "-1px 6px", fontSize: "15px" }}
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default TopUniversitiesClg;
