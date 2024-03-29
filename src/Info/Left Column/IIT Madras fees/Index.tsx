import "./Index.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Index() {
  return (
    <div className="fees">
      <div className="table">
        <h2>IIT Madras Fees & Eligibility</h2>
        <table>
          <tbody>
            <tr>
              <th>Course</th>
              <th>Fees</th>
              <th>Eligibility</th>
              <th>Application Date</th>
              <th>Action</th>
            </tr>
            <tr>
              <td>B.Tech</td>
              <td>2.1 Lakhs (1st Year Fees)</td>
              <td>10+2 with 75% + JEE Advanced</td>
              <td>19 June 29 Jul 2024</td>
              <td>
                Apply Now{" "}
                <ArrowForwardIosIcon
                  style={{ fontSize: "15px", margin: "-3 5px" }}
                />
              </td>
            </tr>
            <tr>
              <td>M.Tech</td>
              <td>19,850 (1st Year Fees)</td>
              <td>Pass in Graduation + GATE</td>
              <td>20 Mar - 18 Apr 2024</td>
              <td>
                Apply Now{" "}
                <ArrowForwardIosIcon
                  style={{ fontSize: "15px", margin: "-3 5px" }}
                />
              </td>
            </tr>
            <tr>
              <td>Ph.D</td>
              <td>15,650 (1st Year Fees)</td>
              <td>Postgraduation</td>
              <td>14 Oct 31 Oct 2023</td>
              <td>
                Apply Now{" "}
                <ArrowForwardIosIcon
                  style={{ fontSize: "15px", margin: "-3 5px" }}
                />
              </td>
            </tr>
            <tr>
              <td>B.Tech + M.Tech</td>
              <td>2.1 Lakhs (1st Year Fees) </td>
              <td>10+2 with 75%</td>
              <td>19 June 29 Jul 2024</td>
              <td>
                Apply Now{" "}
                <ArrowForwardIosIcon
                  style={{ fontSize: "15px", margin: "-3 5px" }}
                />
              </td>
            </tr>
            <tr>
              <td>EMBA</td>
              <td>17 Lakhs (Total Fees)</td>
              <td>Graduation</td>
              <td>-</td>
              <td>
                Apply Now{" "}
                <ArrowForwardIosIcon
                  style={{ fontSize: "15px", margin: "-3 5px" }}
                />
              </td>
            </tr>

            <tr>
              <td>M.SC</td>
              <td>19,850 (1st Year Fees)</td>
              <td>Graduation with 55% + IIT JAM</td>
              <td>11 Apr 25 Apr 2024</td>
              <td>
                Apply Now{" "}
                <ArrowForwardIosIcon
                  style={{ fontSize: "15px", margin: "-3 5px" }}
                />
              </td>
            </tr>
            <tr>
              <td>BS+MS</td>
              <td>2.1 Lakhs (1st Year Fees)</td>
              <td>10+2</td>
              <td>31 Jan 2024</td>
              <td>
                Apply Now{" "}
                <ArrowForwardIosIcon
                  style={{ fontSize: "15px", margin: "-3 5px" }}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Index;
