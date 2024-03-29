import "./Index.css";

function Index() {
  return (
    <div className="cutoff">
      <div className="card">
        <h3>IIT Madras CutOff</h3>
        <div className="row1">
          <p>Exam:</p>
          <button>JEE - Advanced</button>
          <button>GATE</button>
          <button>IIT-JAM</button>
          <button>CAT</button>
        </div>
        <div className="row2">
          <p>
            <b>IIT Madras, JEE-Advanced Cutoff 2023</b>
          </p>
          <p>
            IIT Madras, JEE-Advanced Cutoff 2023 for General Category is listed
            below. The overall cutoff for JEE-Advanced is 144-1795 rank.
          </p>
        </div>
        <div className="row3">
          <div className="table">
            <table>
              <tbody>
                <tr>
                  <th>Courses</th>
                  <th>2024 Cutoff By Rank</th>
                  <th>2023 Cutoff By Rank</th>
                  <th>2022 Cutoff By Rank</th>
                  <th>2021 Cutoff By Rank</th>
                </tr>
                <tr>
                  <td>B.Tech Computer Science Engineering</td>
                  <td>144</td>
                  <td>167</td>
                  <td>163</td>
                  <td>157</td>
                </tr>
                <tr>
                  <td>B.Tech Engineering Physics</td>
                  <td>908</td>
                  <td>985</td>
                  <td>1007</td>
                  <td>818</td>
                </tr>
                <tr>
                  <td>B.Tech Electrical Engineering</td>
                  <td>1795</td>
                  <td>2037</td>
                  <td>1742</td>
                  <td>1589</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <button className="viewBtn">View JEE-Advanced Cutoff</button>
      </div>
    </div>
  );
}

export default Index;
