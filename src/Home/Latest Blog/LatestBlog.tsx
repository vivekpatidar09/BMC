import "./LatestBlog.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface blogtype {
  id: number;
  title: string;
  titledate: string;
  para: string;
}

const blogData: blogtype[] = [
  {
    id: 1,
    title: "CUET 2023 June 2 Exam Analysis",
    titledate: "May 31, 2023",
    para: "CUET 2023 June 2 Exam Analysis Will Be Updated Here After The Exam. NTA Will Conduct CUET 2023 June 2 Exam In Three Slots. Candidates Wi...",
  },
  {
    id: 1,
    title: "CUET 2023 June 2 Exam Analysis",
    titledate: "May 31, 2023",
    para: "CUET 2023 June 2 Exam Analysis Will Be Updated Here After The Exam. NTA Will Conduct CUET 2023 June 2 Exam In Three Slots. Candidates Wi...",
  },
  {
    id: 1,
    title: "CUET 2023 June 2 Exam Analysis",
    titledate: "May 31, 2023",
    para: "CUET 2023 June 2 Exam Analysis Will Be Updated Here After The Exam. NTA Will Conduct CUET 2023 June 2 Exam In Three Slots. Candidates Wi...",
  },
  {
    id: 1,
    title: "CUET 2023 June 2 Exam Analysis",
    titledate: "May 31, 2023",
    para: "CUET 2023 June 2 Exam Analysis Will Be Updated Here After The Exam. NTA Will Conduct CUET 2023 June 2 Exam In Three Slots. Candidates Wi...",
  },
];

function SampleNextArrow(props: any) {
  const { style, onClick } = props;
  return (
    <div
      style={{
        ...style,
        top: "40%",
        right: "1px",
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
        left: "-8px",
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
function LatestBlog() {
  return (
    <div className="latest-blog">
      <Slider {...settings}>
        {blogData.map((x) => {
          return (
            <div key={x.id} className="card">
              <div className="col1">
                <h3>{x.title}</h3>
                <p>{x.titledate}</p>
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

export default LatestBlog;
