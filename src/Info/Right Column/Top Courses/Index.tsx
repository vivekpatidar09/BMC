import "./Index.css";

function Index() {
  interface dataType {
    id: number;
    title: string;
  }

  const data: dataType[] = [
    {
      id: 1,
      title: "B.Tech Computer Science Engineering",
    },
    {
      id: 2,
      title: "B.Tech Computer Science Engineering",
    },
    {
      id: 3,
      title: "B.Tech Computer Science Engineering",
    },
  ];
  return (
    <div className="topCourses">
      <h4>Top Courses</h4>
      <hr />
      <div className="card">
        {data.map((x) => {
          return (
            <div key={x.id}>
              <div className="row1">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p>{x.title}</p>
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#ff5c00",
                    }}
                  >
                    ⬤ 4 year
                  </p>
                </div>
                <p> ⬤ AVO FEE-7204.263/Yr</p>
              </div>
              <hr />
            </div>
          );
        })}
        <div className="row1">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>B.Tech Computer Science Engineering</p>
            <p
              style={{
                fontSize: "12px",
                fontWeight: "500",
                color: "#ff5c00",
              }}
            >
              ⬤ 4 year
            </p>
          </div>
          <p style={{ color: "#3EBA9F", margin: "0 10px" }}>
            {" "}
            AVO FEE-7204.263/Yr
          </p>
        </div>
        <button>View More Course 115</button>
      </div>
    </div>
  );
}

export default Index;
