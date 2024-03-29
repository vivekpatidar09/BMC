import "./StudyGoal.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface goal {
  id: number;
  image: string;
  heading: string;
  college: string;
  subject: string;
  sub2: string;
  sub3: string;
}

const studyGoal: goal[] = [
  {
    id: 1,
    image: "/images/card1img1.svg",
    heading: "Engineering",
    college: "6000 Colleges",
    subject: "BE/B.Tech",
    sub2: "Diploma in Engineering",
    sub3: "ME/M.Tech",
  },
  {
    id: 2,
    image: "/images/card1img2.svg",
    heading: "Management",
    college: "8000 Colleges",
    subject: "MBA/PGDM",
    sub2: "BBA/BBM",
    sub3: "Executive ",
  },
  {
    id: 3,
    image: "/images/card1img3.svg",
    heading: "Commerce",
    college: "4000 Colleges",
    subject: "B.COM",
    sub2: "M.Com",
    sub3: "",
  },
  {
    id: 4,
    image: "/images/card1img4.svg",
    heading: "Arts",
    college: "7000 Colleges",
    subject: "BA",
    sub2: "MA",
    sub3: "MFA",
    // sub4 :'MSW'
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
        cursor: "pointer",
        height: "32px",
        border: "2px solid #e1e1e1",
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
  className: "slider variable-width",
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
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
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

function StudyGoal() {
  return (
    <div className="study-goal">
      <Slider {...settings}>
        {studyGoal.map<JSX.Element>((x) => {
          return (
            <div key={x.id} className="card">
              <div className="card1">
                <div className="col-1">
                  <img src={x.image} alt="" />
                  <div>
                    <h3>{x.heading}</h3>
                    <p>{x.college}</p>
                  </div>
                </div>
                <div className="col-2">
                  <p>{x.subject}</p>
                  <hr />
                  <p>{x.sub2}</p>
                  <hr />
                  <p>{x.sub3}</p>
                  {/* <hr /> */}
                  {/* <p>{x.sub4}</p> */}
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default StudyGoal;
