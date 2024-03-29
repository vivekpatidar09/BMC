import "./LatestNotification.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface notitype {
  id: number;
  image: string;
  title: string;
  para: string;
}

const notificationData: notitype[] = [
  {
    id: 1,
    image: "images/card4img1.png",
    title: "BITSAT 2023 Result for Session 1 Out, Download...",
    para: "BITSAT 2023 session 1 result has been released at bitsadmission.com. Candidates can download the scorecards using their application number and...",
  },
  {
    id: 2,
    image: "images/card4img2.png",
    title: "CLAT 2023 Round 3 Seat - Allotment Out, Check...",
    para: "The third seat allotment list forCLAT 2023 counselling process has been released. Candidates can check the allotment list at...",
  },
  {
    id: 3,
    image: "images/card4img3.png",
    title: "AP EAPCET (EAMCET) 2023 Result declaration on Jun...",
    para: "The third seat allotment list forCLAT 2023 counselling process has been released. Candidates can check the allotment list at...",
  },
];

function SampleNextArrow(props: any) {
  const { style, onClick } = props;
  return (
    <div
      style={{
        ...style,
        top: "40%",
        right: "-15px",
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
        top: "40%",
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

function LatestNotification() {
  return (
    <div className="latest-notification">
      <Slider {...settings}>
        {notificationData.map((x) => {
          return (
            <div key={x.id} className="card">
              <div className="col1">
                <img src={x.image} alt="" />
                <h3>{x.title}</h3>
              </div>

              <p>{x.para}</p>
              <hr />
              <div className="read">
                <a href="#">Read more</a>
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

export default LatestNotification;
