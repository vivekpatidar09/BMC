import "./Index.css";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DownloadIcon from "@mui/icons-material/Download";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props: any) {
  const { style, onClick } = props;
  return (
    <div
      style={{
        ...style,
        top: "33%",
        right: "1px",
        cursor: "pointer",
        height: "28px",
        backgroundColor: "#fff",
        zIndex: "2",
        padding: "2px",
        borderRadius: "50%",
        position: "absolute",
        boxShadow: " 0px 0px 3px 0.1px rgba(0, 0, 0, 0.4) ",
      }}
      onClick={onClick}
    >
      <KeyboardArrowRightIcon style={{ fontSize: "1.8rem" }} />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { style, onClick } = props;
  return (
    <div
      style={{
        ...style,
        top: "33%",
        cursor: "pointer",
        height: "28px",
        padding: "2px",
        zIndex: "2",
        borderRadius: "50%",
        backgroundColor: "#fff",
        position: "absolute",
        boxShadow: " 0px 0px 2px 0px rgba(0, 0, 0, 0.5) ",
      }}
      onClick={onClick}
    >
      <KeyboardArrowLeftIcon style={{ fontSize: "1.8rem" }} />
    </div>
  );
}

var settings = {
  dots: false,
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

function Index() {
  const data = [
    {
      id: 1,
      Image: "/images/thumb-0 (1).png",
      subject: "Phd Brochure",
    },
    {
      id: 2,
      Image: "/images/thumb-0 (2) 1.png",
      subject: "IIT JAM Brochure",
    },
    {
      id: 3,
      Image: "/images/thumb-0.png",
      subject: "MTech",
    },
  ];

  return (
    <div className="brochure">
      <h3>IIT Madras Brochure</h3>
      <hr />
      <Slider {...settings}>
        {data.map((x) => {
          return (
            // <div style={{ display: "flex" }}>
            <div className="card" key={x.id}>
              <div
                style={{
                  padding: "10px 30px 30px 30px",
                  boxShadow: "0 0px 3px 0 rgba(0, 0, 0, 0.3)",
                }}
              >
                <img src={x.Image} alt="" />
              </div>
              <div className="dataDownload">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <p>Download</p>
                  <DownloadIcon style={{ fontSize: "15px" }} />
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <p>View</p>
                  <RemoveRedEyeIcon style={{ fontSize: "15px" }} />
                </div>
              </div>
              <div className="title">
                <h4>{x.subject}</h4>
                <p>2023</p>
              </div>
            </div>
            // </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Index;
