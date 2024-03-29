import "./Index.css";

function Index() {
  interface facilityType {
    id: number;
    image: string;
    name: string;
  }

  const facility: facilityType[] = [
    {
      id: 1,
      image: "/images/page3academic.svg",
      name: "Academic Zone",
    },
    {
      id: 2,
      image: "/images/page3atm-card.svg",
      name: "ATM",
    },
    {
      id: 3,
      image: "/images/page3hostel.svg",
      name: "Boys Hostel",
    },
    {
      id: 4,
      image: "/images/page3food2s.svg",
      name: "Canteen",
    },
    {
      id: 5,
      image: "/images/page3computer-code.svg",
      name: "Computer Lab",
    },
    {
      id: 6,
      image: "/images/page3hostel.svg",
      name: "Girls Hostel",
    },
    {
      id: 7,
      image: "/images/page3food.svg",
      name: "Mess",
    },
    {
      id: 8,
      image: "/images/page3open-book.svg",
      name: "Library",
    },
    {
      id: 9,
      image: "/images/page3medical-kit.svg",
      name: "Medical Facilities",
    },
    {
      id: 10,
      image: "/images/page3classroom.svg",
      name: "Class Room",
    },
    {
      id: 11,
      image: "/images/page3suitcase-icon.svg",
      name: "Placement",
    },
    {
      id: 12,
      image: "/images/page3sport.svg",
      name: "Sports",
    },
  ];

  return (
    <div className="madras-facilities">
      <div className="card">
        <h3>IIT Madaras Facilites</h3>
        <div className="facilities">
          {facility.map((x) => {
            return (
              <div className="data" key={x.id}>
                <img src={x.image} />
                <p>{x.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Index;
