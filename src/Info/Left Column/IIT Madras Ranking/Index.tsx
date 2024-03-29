import "./Index.css";

function Index() {
  return (
    <div className="ranking">
      <div className="card">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3>IIT Madars Placement</h3>
          <h3>
            <a href="#">View All</a>
          </h3>
        </div>
        <div className="row1">
          <div className="col1">
            <img src="/images/the_week_logo.png" alt="" />
            <p>
              B.Tech #3 out of 131 inIndia 2023 (#3 out of 216 in India 2022)
            </p>
            <p>#1st in Chennai</p>
            <p>#1 in Tamil Nadu</p>
          </div>
          <div className="col1">
            <img src="/images/nirf_logo.png" alt="" />
            <p>
              Overall #1 out of 200 inIndia 2023 (#1 out of 200 in India 2022)
            </p>
            <p>#1st in Chennai</p>
            <p>#1 in Tamil Nadu</p>
            <div style={{margin:'20px 0'}}>
              <p>
                B.Tech #1 out of 200 inIndia 2023 (#1 out of 300 in India 2022)
              </p>
              <p>#1st in Chennai</p>
              <p>#1 in Tamil Nadu</p>
            </div>
          </div>
        </div>
        <button>View More Ranking</button>
      </div>
    </div>
  );
}

export default Index;
