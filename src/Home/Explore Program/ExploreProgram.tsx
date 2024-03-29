import "./ExploreProgram.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function ExploreProgram() {
  return (
    <div className="explore-program">
      <>
        <div className="card">
          <div className="col1">
            <div>
              <h3>Ranking</h3>
              <p>College ranked based on real data</p>
            </div>
            <img src="/images/card3img.svg" alt="" />
          </div>
          <div className="btns">
            <button>Indiatoday - 1457</button>
            <button>Outllok - 1144</button>
            <button>NIRF - 1104</button>
            <button>The Week484</button>
            <button>IIRF - 874</button>
          </div>
          <a href="#">
            Top Ranked Colleges in India{" "}
            <ArrowForwardIosIcon
              style={{ fontSize: "10px", margin: "-1px 6px" }}
            />
          </a>
        </div>
        <div className="card">
          <div className="col1">
            <div>
              <h3>Find College</h3>
              <p>College ranked based on real data</p>
            </div>
            <img src="/images/card3img2.png" alt="" />
          </div>
          <div className="btns">
            <button>Best colleges for Diploma in mechanical...</button>
            <button>Best colleges for Diploma in Softwere</button>
          </div>
          <a href="#">
            Top Ranked Colleges in India{" "}
            <ArrowForwardIosIcon
              style={{ fontSize: "10px", margin: "-1px 6px" }}
            />
          </a>
        </div>
        <div className="card">
          <div className="col1">
            <div>
              <h3>Compare Colleges</h3>
              <p>College ranked based on real data</p>
            </div>
            <img src="/images/card3img3.svg" alt="" />
          </div>

          <div className="row-1">
            <div className="c-1">
              <div style={{ display: "flex" }}>
                <img src="/images/card3cardimg.png" />
                <div>
                  <p>IIT Madras</p>
                  <p style={{ color: "#FF5C00" }}>BE/B.Tach</p>
                </div>
              </div>
              <img src="/images/card3cardimg2.png" />
            </div>
            <div className="c-2">
              <img src="/images/card3cardimg3.png" />
              <div>
                <p>IIT Madras</p>
                <p style={{ color: "#FF5C00" }}>BE/B.Tach</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="row-2">
            <div className="c-1">
              <div style={{ display: "flex" }}>
                <img src="/images/card3cardimg.png" />
                <div>
                  <p>IIT Madras</p>
                  <p style={{ color: "#FF5C00" }}>BE/B.Tach</p>
                </div>
              </div>
              <img src="/images/card3cardimg2.png" />
            </div>
            <div className="c-2">
              <img src="/images/card3cardimg3.png" />
              <div>
                <p>IIT Madras</p>
                <p style={{ color: "#FF5C00" }}>BE/B.Tach</p>
              </div>
            </div>
          </div>

          <a href="#">
            Top Ranked Colleges in India{" "}
            <ArrowForwardIosIcon
              style={{ fontSize: "10px", margin: "-1px 6px" }}
            />
          </a>
        </div>

        <div className="card">
          <div className="col1">
            <div>
              <h3>Exam</h3>
              <p>College ranked based on real data</p>
            </div>
            <img src="/images/card3img4.svg" alt="" />
          </div>
          <div className="btns">
            <button>B.Com</button>
            <button>B.Sc</button>
            <button>B.Sc (Nursing)</button>
            <button>BA</button>
            <button>BBA/BBM</button>
            <button>BCA</button>
            <button>BE/B.Tech</button>
          </div>
          <a href="#">
            Top Ranked Colleges in India{" "}
            <ArrowForwardIosIcon
              style={{ fontSize: "10px", margin: "-1px 6px" }}
            />
          </a>
        </div>

        <div className="card">
          <div className="col1">
            <div>
              <h3>College Predictor</h3>
              <p>College ranked based on real data</p>
            </div>
            <img src="/images/card3img5.png" alt="" />
          </div>
          <div className="btns">
            <button>NEET</button>
            <button>JEE Advanced</button>
            <button>JEE Main</button>
            <button>CAT</button>
            <button>NMAT</button>
            <button>GATE</button>
            <button>MAT</button>
          </div>
          <a href="#">
            Top Ranked Colleges in India{" "}
            <ArrowForwardIosIcon
              style={{ fontSize: "10px", margin: "-1px 6px" }}
            />
          </a>
        </div>

        <div className="card">
          <div className="col1">
            <div>
              <h3>Course Finder</h3>
              <p>College ranked based on real data</p>
            </div>
            <img src="/images/card3img6.svg" alt="" />
          </div>
          <div className="btns">
            <button>MBA/PGD-949</button>
            <button>ME/M.Tech-939</button>
            <button>BE/B.Tach-898</button>
            <button>M.Sc - 789</button>
            <button>B.Sc - 778</button>
          </div>
          <a href="#">
            Top Ranked Colleges in India{" "}
            <ArrowForwardIosIcon
              style={{ fontSize: "10px", margin: "-1px 6px" }}
            />
          </a>
        </div>
      </>
    </div>
  );
}

export default ExploreProgram;
