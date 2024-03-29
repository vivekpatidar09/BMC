import "./Index.css";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

function Index() {
  interface boxtype {
    id: number;
    image: string;
    name: string;
  }

  const box: boxtype[] = [
    {
      id: 1,
      image: "/images/page3suitcase-icon.svg",
      name: "Placement",
    },
    {
      id: 2,
      image: "/images/page3family-house.svg",
      name: "Campus Life",
    },
    {
      id: 3,
      image: "/images/page3classroom.svg",
      name: "Faculty",
    },
    {
      id: 4,
      image: "/images/page3fee.svg",
      name: "Hostel Fee",
    },
    {
      id: 5,
      image: "/images/page3money.svg",
      name: "Value For Money",
    },
  ];

  return (
    <div className="review">
      <div className="card">
        <h3>IIT Madras Reviews</h3>
        <div className="rating">
          <div className="col1">
            <div className="row1">
              <img src="/images/page3star_icon.png" alt="" />
              <p>
                4.5<span>/5</span>
              </p>
            </div>
            <div className="row2">
              <VerifiedUserIcon
                style={{ color: "#20BF55", width: "10px", margin: "0 5px" }}
              />
              <p>258 Verified Review</p>
            </div>
          </div>
          <div className="col2">
            <div className="row1">
              <img src="/images/page3star_icon.png" />
              <p>4-5</p>
              <div className="progressbarP">
                <div className="progressbarC"></div>
              </div>
              <p>218</p>
            </div>
            <div className="row2">
              <img src="/images/page3star_icon.png" />
              <p>3-4</p>
              <div className="progressbarP">
                <div className="progressbarC"></div>
              </div>
              <p>37</p>
            </div>
            <div className="row3">
              <img src="/images/page3star_icon.png" />
              <p>2-3</p>
              <div className="progressbarP">
                <div className="progressbarC"></div>
              </div>
              <p>6</p>
            </div>
          </div>
        </div>
        <div className="boxes-section">
          {box.map((x) => {
            return (
              <div className="box" key={x.id}>
                <img src={x.image} />
                <p>
                  <img src="/images/page3star_icon.png" />
                  5.0
                </p>
                <p>{x.name}</p>
              </div>
            );
          })}
        </div>

        <div style={{ marginBottom: "20px" }}>
          <h3>IIT Madars Reviews</h3>
          <div className="selectbtns">
            <div>
              <select name="" id="">
                <option value="">Affiliated Colleges</option>
              </select>
              <select name="" id="">
                <option value="">Stream </option>
              </select>
              <select name="" id="">
                <option value="">Course Tag</option>
              </select>
              <select name="" id="">
                <option value="">Course</option>
              </select>
              <select name="" id="">
                <option value="">Batch</option>
              </select>
            </div>
            <div className="filter">
              <button>Sort By: Newest First</button>
            </div>
          </div>
          <hr />
          <div className="btns">
            <button>IIT Madras Online Degree (5)</button>
            <button>
              Department of Management Studies, IIT Madras - [DOMS IIT Madras]
              (3)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
