import "./Index.css";

function Index() {
  const data = [
    {
      id: 1,
      Clgimage1: "/images/page3popularcomparison1.png",
    },
    {
      id: 2,
      Clgimage1: "/images/page3popularcomparison1.png",
    },
    {
      id: 3,
      Clgimage1: "/images/page3popularcomparison1.png",
    },
    {
      id: 4,
      Clgimage1: "/images/page3popularcomparison1.png",
    },
    {
      id: 5,
      Clgimage1: "/images/page3popularcomparison1.png",
    },
    {
      id: 6,
      Clgimage1: "/images/page3popularcomparison1.png",
    },
  ];

  return (
    <div className="comparison">
      <h3>Popular Comparison</h3>
      <hr />
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {data.map((x) => {
          return (
            <div className="card" key={x.id}>
              <div className="img-col">
                <img src={x.Clgimage1} alt="" />
                <img src="/images/page3popularcomparison2.png" alt="" />
              </div>
              <div className="datacol">
                <div className="col1">
                  <p>
                    <b>IIT Madras </b>
                  </p>
                  <p>Bachelor of Technology [B.Tech]</p>
                </div>
                <span>VS</span>
                <div className="col2">
                  <p>
                    <b>IIT Kanpur </b>
                  </p>
                  <p> B.Tech Computer Science Engineering</p>
                </div>
              </div>
            </div>
          );
        })}
        <button className="compare-btn">Compare Now </button>
      </div>
    </div>
  );
}

export default Index;
