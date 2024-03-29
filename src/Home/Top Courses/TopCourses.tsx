import "./TopCourses.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface btnstype {
  id: number;
  btn: string;
}

const btns: btnstype[] = [
  {
    id: 1,
    btn: "BE/B.Tech",
  },
  {
    id: 2,
    btn: "BA",
  },
  {
    id: 3,
    btn: "B.Sc",
  },
  {
    id: 4,
    btn: "MBA/PGDM",
  },
  {
    id: 5,
    btn: "M.Sc",
  },
  {
    id: 6,
    btn: "ME/M.Tech",
  },
  {
    id: 7,
    btn: "MA",
  },
  {
    id: 8,
    btn: "Polytechnic",
  },
  {
    id: 9,
    btn: "M.Phil/Ph.D in Science",
  },
  {
    id: 10,
    btn: "B.Com",
  },
  {
    id: 11,
    btn: "BA",
  },
  {
    id: 12,
    btn: "M.Phil/Ph.D in Arts",
  },
  {
    id: 13,
    btn: "BBA/BBM",
  },
  {
    id: 14,
    btn: "B.Ed",
  },
  {
    id: 15,
    btn: "M.Phil/Ph.D in Engineering",
  },
];

function TopCourses() {
  return (
    <div className="top-courses">
      <h2>Top Courses</h2>
      <div className="card">
        <div className="btns">
          {btns.map((x) => {
            return (
              <div key={x.id}>
                <button>
                  {x.btn}
                  <ArrowForwardIcon
                    style={{
                      border: "1px solid #b1a9a9",
                      margin: "0px 0px -3px 5px",
                      fontSize: "16px",
                      borderRadius: "50%",
                    }}
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TopCourses;
