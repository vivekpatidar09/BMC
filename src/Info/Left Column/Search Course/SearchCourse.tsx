import "./SearchCourse.css";

function SearchCourse() {
  const checkBox = [
    {
      id: 1,
      p: "B.Tech",
    },
    {
      id: 2,
      p: "M.Tech",
    },
    {
      id: 3,
      p: "B.Tech + M.Tech",
    },
    {
      id: 4,
      p: "EMBA",
    },
    {
      id: 5,
      p: "M.Sc",
    },
    {
      id: 6,
      p: "BS+MS",
    },
    {
      id: 7,
      p: "Diploma",
    },
    {
      id: 8,
      p: "Engineering",
    },
    {
      id: 9,
      p: "Science",
    },
    {
      id: 10,
      p: "Arts",
    },
    {
      id: 11,
      p: "Management",
    },
    {
      id: 12,
      p: "Computer Applications",
    },
    {
      id: 13,
      p: "Law",
    },
    {
      id: 14,
      p: "Degree",
    },
    {
      id: 15,
      p: "Diploma",
    },
    {
      id: 16,
      p: "Certification",
    },
    {
      id: 17,
      p: "Computer Science",
    },
    {
      id: 18,
      p: "Data Science",
    },
    {
      id: 19,
      p: "Aerospace Engineering",
    },
    {
      id: 20,
      p: "Electronic",
    },
  ];

  return (
    <div className="search-course">
      <div className="card">
        <input type="text" placeholder="Search Course" />
        <h5>Filter By:</h5>
        <div className="nav-btn">
          <button>Popular</button>
          <button>Degree</button>
          <button>Streams</button>
          <button>Program Type</button>
          <button>Course type</button>
          <button>Entrance/Exam Accepted</button>
        </div>
        <div className="check-box">
          {checkBox.map((x) => {
            return (
              <div key={x.id}>
                <p>
                  <input
                    type="checkbox"
                    style={{ margin: "0 4px", width: "18px", height: "15px" }}
                  />
                  {x.p}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SearchCourse;
