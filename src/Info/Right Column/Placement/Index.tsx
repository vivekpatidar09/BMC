import "./Index.css";

function Index() {
  return (
    <div className="placement">
      <h3>Placement</h3>
      <hr />
      <div className="card">
        <div className="row">
          <p>₹ 19,800,000</p>
          <p>Highest Package</p>
        </div>
        <hr />
        <div className="row">
          <p>₹ 2,148,000</p>
          <p>Average Package</p>
        </div>
        <hr />
        <div className="images">
          <img src="/images/amazon_logo.png" />
          <img src="/images/cisco-logo.png" />
          <img src="/images/citi_logo.png" />
          <img src="/images/Citrix_logo.png" />
          <img src="/images/cognizant_logo.png" alt="" />
          <img src="/images/Credit-Suisse-logo.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Index;
