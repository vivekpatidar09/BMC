import "./StudyAbroad.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface studytype {
  id: number;
  img1: string;
  title: string;
}

const studyData: studytype[] = [
  {
    id: 1,
    img1: "/images/card13img1.png",
    title: "Study in USA",
  },
  {
    id: 2,
    img1: "/images/card13img2.png",
    title: "Study in UK",
  },
  {
    id: 3,
    img1: "/images/card13img3.png",
    title: "Study in CANADA",
  },
];

function SampleNextArrow(props: any) {
  const { style, onClick } = props;
  return (
    <div
      style={{
        ...style,
        top: "47%",
        right: "-10px",
        cursor: "pointer",
        height: "35px",
        padding: "2px",
        zIndex: "2",
        borderRadius: "50%",
        backgroundColor: "#fff",
        position: "absolute",
        boxShadow: " 0px 0px 2px 0px rgba(0, 0, 0, 0.5) ",
      }}
      onClick={onClick}
    >
      <ArrowForwardIcon style={{ fontSize: "2.2rem" }} />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { style, onClick } = props;
  return (
    <div
      style={{
        ...style,
        top: "47%",
        left: "-1px",
        cursor: "pointer",
        height: "35px",
        padding: "2px",
        zIndex: "2",
        borderRadius: "50%",
        backgroundColor: "#fff",
        position: "absolute",
        boxShadow: " 0px 0px 2px 0px rgba(0, 0, 0, 0.5) ",
      }}
      onClick={onClick}
    >
      <ArrowBackIcon style={{ fontSize: "2.2rem" }} />
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
function StudyAbroad() {
  return (
    <div className="study-abroad">
      <Slider {...settings}>
        {studyData.map((x) => {
          return (
            <div key={x.id} className="card">
              <div className="col1">
                <div className="div1">
                  <img src={x.img1} alt="" />
                  <div>
                    <h5>{x.title}</h5>
                    <p>
                      Check 1038 Colleges
                      <ArrowForwardIosIcon
                        style={{ margin: "-2px 6px", fontSize: "11px" }}
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col2">
                <div className="row1">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img src="/images/card13img4.png" alt="" />
                    <div>
                      <p>1030</p>
                      <p style={{ display: "flex", alignItems: "center" }}>
                        No. Of Colleges
                      </p>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img src="/images/card13img5.png" alt="" />
                    <div>
                      <p> 31.77 K USD/Year</p>
                      <p style={{ display: "flex", alignItems: "center" }}>
                        Avg. Study Cost
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row2">
                  <p style={{ color: "grey" }}>Guides</p>
                  <hr />
                  <a href="">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <p>Why Study in the USA?</p>
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
                      <p>SOP for USA</p>
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
                      <p>Exams for Studying in USA</p>
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
                      <p>Post Study Opportunities in USA</p>
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

export default StudyAbroad;
