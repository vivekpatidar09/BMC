import "./Index.css";

function Index() {
  const data = [
    {
      id: 1,
      name: "Indu kalla",
    },
    {
      id: 2,
      name: "Indu kalla",
    },
    {
      id: 3,
      name: "Indu kalla",
    },
    {
      id: 4,
      name: "Indu kalla",
    },
  ];

  return (
    <div className="process">
      {data.map((x) => {
        return (
          <div className="card" key={x.id}>
            <div className="row1">
              <div className="col1">
                <img src="/images/page3profileimg.png" alt="" />
                <div className="col2">
                  <div>
                    <h4>{x.name}</h4>
                  </div>
                  <div style={{ display: "flex" }}>
                    <li>Enrolled 2022</li>
                    <li>B.Tech, Civil Engineering</li>
                    <li>February 11, 2024</li>
                  </div>
                </div>
              </div>
              <div className="col3">
                <img src="/images/page3star_icon.png" />
                <p>5.0</p>
              </div>
            </div>
            <div className="row2">
              <h5>GO ITEM</h5>
              <div className="col1">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img src="/images/page3like_icon.png" alt="" />
                  <p style={{ fontSize: "11px", fontWeight: "500" }}>Likes</p>
                </div>
                <div className="lines">
                  <li>
                    Campus life is at the best, u can make or break u r career
                    here
                  </li>
                  <li>
                    Research atmosphere is very good professor will show hell
                    lot of interest in it
                  </li>
                </div>
                <span>+ 1 More</span>
              </div>
            </div>
            <div className="row3">
              <div className="col1">
                <p>
                  <span>Admission: </span> admission process is through jee
                  advanced, you can find application form through NTA agency, i
                  got reservation benefit of OBC female, the deatils of jee
                  advanced and jee mains fee is given in NTA website every year.{" "}
                  <span>Course Curriculum Overview</span>I choose this course
                  according to my jee advanced rank, the faculty to student
                  ratio is 10 students for one faculty, faculty are mostly iit
                  alumni and from other good colleges, Teaching method of the
                  faculty varies from person to person, exams are in the form of
                  quiz 1,2 and end semester
                </p>
                <div className="btns">
                  <button>Class Size: 129</button>
                  <button>Course Fees: INR 270000 per year</button>
                </div>
              </div>
              <div className="col2">
                <p>Placement: 9/10</p>
                <p>College: 10/10</p>
                <p>Course: 9/10</p>
                <p>Hostel: 9/10</p>
                <p>Campus Life: 10/10</p>
                <a href="#">Read More</a>
              </div>
            </div>
            <hr />
            <div className="viewall-btn">
              <button>View All Review</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Index;
