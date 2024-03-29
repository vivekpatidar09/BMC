import "./ExploreCourses.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface courseType {
  id: number;
  subHead: string;
  time: string;
  fees: string;
  fees2: string;
}

const courseData: courseType[] = [
  {
    id: 1,
    subHead: "B.com General",
    time: "3 Years",
    fees: "60.91 K",
    fees2: "6432",
  },
  {
    id: 2,
    subHead: "B.Ed General",
    time: "2 Years",
    fees: "81.49 K",
    fees2: "5419",
  },
  {
    id: 3,
    subHead: "BCA General",
    time: "3 Years",
    fees: "1.31 L",
    fees2: "4825",
  },
  {
    id: 4,
    subHead: "BA General",
    time: "3 Years",
    fees: "41.50 k",
    fees2: "3866",
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
        left: "-7px",
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
        initialSlide: 1,
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

function ExploreCourses() {
  return (
    <div className="explore-courses">
      <Slider {...settings}>
        {courseData.map((x) => {
          return (
            <div key={x.id} className="card">
              <div className="col1">
                <span>Full Time</span>
                <h3>{x.subHead}</h3>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p>Duration</p>
                  <p>{x.time}</p>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p>Total Avg. Fees</p>
                  <p>{x.fees}</p>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p>Total Avg. Fees</p>
                  <p>{x.fees2}</p>
                </div>
              </div>
              <hr />
              <div className="read">
                <a href="#">Course Overview</a>
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

export default ExploreCourses;
