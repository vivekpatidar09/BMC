import "./Index.css";
import clock from "/images/pagecard3clock.svg";
import degree from "/images/pagecard3bookicon.svg";
import campus from "/images/pagecard3univercity.svg";
import graduation from "/images/pagecard3graduate.svg";
import fullTime from "/images/pagecard3fulltime.svg";

function Index() {
  interface dataType {
    id: number;
    title: string;
  }

  const data: dataType[] = [
    {
      id: 1,
      title: "Courses Offered By IIT Madras, Chennai",
    },
    {
      id: 2,
      title: "Master of Technology [M.Tech]",
    },
    {
      id: 3,
      title: "Master of Technology [M.Tech]",
    },
  ];

  return (
    <div className="courses-offered">
      {data.map((x) => {
        return (
          <div className="card" key={x.id}>
            <h3>{x.title}</h3>
            <hr />
            <div className="data">
              <div className="col1">
                <p>Bachelor of Technology [B.Tech]</p>
                <div className="detail">
                  <p>
                    <img src={clock} /> 4 Years
                  </p>
                  <p>
                    <img src={degree} /> Degree
                  </p>
                  <p>
                    <img src={campus} /> On Campus
                  </p>
                  <p>
                    <img src={graduation} /> Graduation
                  </p>
                  <p>
                    <img src={fullTime} /> Full Time
                  </p>
                </div>
                <div className="para">
                  <p>
                    8.9/10 <img src="/images/page3card3rating.png" />
                    <span>144 Reviews</span> <b>|</b> Rated #3 out of 131 by
                    <span>The Week in Engineering </span>
                    Exams Accepted: <span>JEE Advanced</span> Specialization:
                    <span> Computer Science and Engineering </span> <b>|</b>
                    <span>Aerospace Engineering</span> <b>|</b>
                    <span>Mechanical Engineering</span> <b>|</b>
                    <span>Naval Architecture & Ocean Engineering</span> +6 More
                    Cutoff: B.Tech Computer Science Engineering JEE-Advanced
                    2023 Cut off: 144 Application Deadline: 19 June - 29 Jul
                    2024
                  </p>
                </div>
                <div className="btns">
                  <button>Admission Predictor</button>
                  <button>Download Brochure</button>
                  <button>Compare</button>
                </div>
              </div>
              <div className="col2">
                <p>
                  ₹ 209,550 <span>Ist Yr Fees</span> Check Detailrd Fees
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Index;
