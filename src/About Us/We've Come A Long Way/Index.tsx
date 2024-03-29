import "./Index.css";

function Index() {
  const data = [
    {
      id: 1,
      image: "/images/page4img6.svg",
      num: "25,000",
      para: "COLLEGES",
    },
    {
      id: 2,
      image: "/images/page4img7.svg",
      num: "250",
      para: "EXAMS",
    },
    {
      id: 3,
      image: "/images/page4img8.svg",
      num: "30,000,000",
      para: "MONTHLY VISITS",
    },
    {
      id: 4,
      image: "/images/page4img9.svg",
      num: "200,000",
      para: "CUPS OF COFFEE CONSUMED",
    },
  ];

  return (
    <div className="details">
      <h2>We've Come A Long Way</h2>
      <div className="cards">
        {data.map((x) => {
          return (
            <div className="card" key={x.id}>
              <img src={x.image} alt="" />
              <p>{x.num}</p>
              <p>{x.para}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Index;
