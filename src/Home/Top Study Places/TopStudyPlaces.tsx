import "./TopStudyPlaces.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface placeType {
  id: number;
  image: string;
  heading: string;
}

const placesData: placeType[] = [
  {
    id: 1,
    image: "/images/card9img1.png",
    heading: "Delhi NCR",
  },
  {
    id: 2,
    image: "/images/card9img2.png",
    heading: "Bangalore",
  },
  {
    id: 3,
    image: "/images/card9img3.png",
    heading: "Hyderabad",
  },
  {
    id: 4,
    image: "/images/card9img4.png",
    heading: "Pune",
  },
  {
    id: 5,
    image: "/images/card9img5.png",
    heading: "Mumbai",
  },
  {
    id: 6,
    image: "/images/card9img6.png",
    heading: "Chennai",
  },
];

function TopStudyPlaces() {

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
    className: "slider variable-width",
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1266,
        settings: {
          slidesToShow: 4,
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
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="topStudy-places">
      <Slider {...settings}>
        {placesData.map((x) => {
          return (
            <div key={x.id} className="card">
              <div style={{ height: "5rem", margin: "1rem 0" }}>
                <img src={x.image} />
              </div>
              <h4>{x.heading}</h4>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default TopStudyPlaces;
