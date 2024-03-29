import "./Index.css";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

function Index() {
  const data = [
    {
      id: 1,
      title: "GATE 2024 Response Sheet Out...",
    },
    {
      id: 2,
      title: "GATE 2024 Response Sheet Out...",
    },
    {
      id: 3,
      title: "GATE 2024 Response Sheet Out...",
    },
    {
      id: 4,
      title: "GATE 2024 Response Sheet Out...",
    },
  ];
  return (
    <div className="notification">
      <h4>Notifications</h4>
      <div className="card">
        {data.map((x) => {
          return (
            <div className="row1" key={x.id}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src="/images/page3img9.png" alt="" />
                <div>
                  <p> {x.title}</p>
                  <p>
                    IISC Banglore Has released GATE 2024 responses At gate 2024
                    lisc.ac.in. <a href="#">Read More</a>
                  </p>
                  <p>
                    <CalendarTodayIcon
                      style={{ fontSize: "13px", margin: "-2px" }}
                    />{" "}
                    Feb 17,2024
                  </p>
                </div>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Index;
