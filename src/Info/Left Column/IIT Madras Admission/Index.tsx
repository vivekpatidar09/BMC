import "./Index.css";
function Index() {
  return (
    <div className="admission">
      <div className="card">
        <h3>IIT Madras Admission 2024 Dates</h3>
        <div className="row1">
          <button>All</button>
          <button>BE/B.Tech</button>
          <button>MBA/PGDM</button>
          <button>ME/M.Tech</button>
          <button>M.Sc</button>
        </div>
        <div className="row2">
          <p>
            <b>Important Events</b>
          </p>
        </div>
        <div className="row3">
          <div className="table">
            <table>
              <tbody>
                <tr>
                  <th>Event</th>
                  <th>Date</th>
                </tr>
                <tr>
                  <td>PI (Chennai) (MBA)</td>
                  <td>Mar 01, 2024 - Mar 03, 2024 Upcoming</td>
                </tr>
                <tr>
                  <td>PI (Mumbai) (MBA)</td>
                  <td>Mar 08, 2024-Mar 10, 2024</td>
                </tr>
                <tr>
                  <td>GATE 2024 Result Date</td>
                  <td>Mar 16, 2024</td>
                </tr>
                <tr>
                  <td>PI (Delhi) (MBA)</td>
                  <td>Mar 15, 2024 - Mar 17, 2024</td>
                </tr>
                <tr>
                  <td>IIT JAM Result Date</td>
                  <td>Mar 22, 2024</td>
                </tr>
                <tr>
                  <td>PI (Hyderabad & Kolkata) (MBA)</td>
                  <td>Mar 22, 2024-Mar 24, 2024</td>
                </tr>
                <tr>
                  <td>Application Timeline (M.Tech) [COAP Counselling)</td>
                  <td>Mar 20, 2024- Apr 18, 2024</td>
                </tr>
                <tr>
                  <td>Tentative Application Timeline (M.SC)</td>
                  <td>Apr 11, 2024-Apr 25, 2024</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <button className="viewBtn">Shop More</button>
      </div>
    </div>
  );
}

export default Index;
