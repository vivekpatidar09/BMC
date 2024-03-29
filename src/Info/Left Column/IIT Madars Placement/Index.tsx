import "./Index.css";

function Index() {
  return (
    <div className="madras-placement">
      <div className="card">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3>IIT Madars Placement</h3>
          <h3>
            <a href="#">View All</a>
          </h3>
        </div>
        <div className="row-1">
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="growth-card">
              <div className="img">
                <img src="/images/page3growth1.svg" />
              </div>
              <div>
                <h3>
                  <b>1.98 Crore</b>
                </h3>
                <p>Highest Package</p>
              </div>
            </div>
            <div className="growth-card">
              <div className="img">
                <img src="/images/page3growth2.svg" />
              </div>
              <div>
                <h3>
                  <b>21.48 Lakhs</b>
                </h3>
                <p>Average Package</p>
              </div>
            </div>
            <div className="col2">
              <div className="logo-imgs">
                <img src="/images/cisco-logo.png" />
                <img src="/images/amazon_logo.png" />
                <img src="/images/Citrix_logo.png" />
                <img src="/images/citi_logo.png" />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <button>Get Detailed Placement Data</button>
      </div>
    </div>
  );
}

export default Index;
