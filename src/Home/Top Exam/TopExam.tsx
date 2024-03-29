import "./TopExam.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface examType {
  id: number;
  subHead: string;
  participate: string;
  date: string;
  level: string;
  image: string;
}

const examData: examType[] = [
  {
    id: 1,
    image: "/images/card11img1.png",
    subHead: "NEET",
    participate: "798",
    date: "May 07, 2023",
    level: "National",
  },
  {
    id: 2,
    image: "/images/card11img2.png",
    subHead: "CAT",
    participate: "1433",
    date: "November 26,2023",
    level: "National",
  },
  {
    id: 3,
    image: "/images/card11img3.png",
    subHead: "JEE Advanced",
    participate: "44",
    date: "June 04, 2023",
    level: "National",
  },
  {
    id: 4,
    image: "/images/card11img1.png",
    subHead: "JEE Main",
    participate: "1671",
    date: "April 06, 2023",
    level: "National",
  },
];

function SampleNextArrow(props: any) {
  const { style, onClick } = props;
  return (
    <div
      style={{
        ...style,
        top: "44%",
        right: "-10px",
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
        top: "44%",
        left: "3px",
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
  slidesToShow: 4,
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
        dots: false,
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

function TopExam() {
  return (
    <div className="top-exam">
      <Slider {...settings}>
        {examData.map((x) => {
          return (
            <div key={x.id} className="card">
              <div className="col1">
                <div className="row1">
                  <img src={x.image} alt="" />
                  <div>
                    <span>Full participate</span>
                    <h3>{x.subHead}</h3>
                  </div>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p>Participating Colleges</p>
                  <p>{x.participate}</p>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p>Exam Date</p>
                  <p>{x.date}</p>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p>Exam Level</p>
                  <p>{x.level}</p>
                </div>
              </div>
              <hr />
              <div className="read">
                <a href="#">Application Process</a>
                <a href="#">
                  <ArrowForwardIosIcon style={{ margin: "-1px 6px" }} />
                </a>
              </div>
              <hr />
              <div className="read">
                <a href="#">Exam Info</a>
                <a href="#">
                  <ArrowForwardIosIcon style={{ margin: "-1px 6px" }} />
                </a>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default TopExam;
