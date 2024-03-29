import "./Index.css";

function Index() {
  interface dataType {
    id: number;
    image: string;
  }

  const data: dataType[] = [
    {
      id: 1,
      image: "/images/page3madrasnews.png",
    },
    {
      id: 2,
      image: "/images/page3madrasnews (2).png",
    },
    {
      id: 3,
      image: "/images/page3madrasnews (3).png",
    },
    {
      id: 4,
      image: "/images/page3madrasnews (4).png",
    },
  ];

  return (
    <div className="madras-news">
      <h3>IIT Madars News</h3>
      <hr />
      <div className="cards">
        {data.map((x) => {
          return (
            <div className="card" key={x.id}>
              <div className="col1">
                <img src={x.image} alt="" />
              </div>
              <div className="data">
                <p>February 13, 2024</p>
                <p>
                  IIT Madras Zanzibar Enhances Admission Process for 2024-25;
                </p>
                <p>
                  New Delhi: IIT Madras Zanzibar has announced plans for
                  considerable expansion and improvement of its........
                  <a href="#">Read More</a>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Index;
