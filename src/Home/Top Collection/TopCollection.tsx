import { Link } from "react-router-dom";
import "./TopCollection.css";

interface clgtype {
  id: number;
  title: string;
  image: string;
}

const clgdata: clgtype[] = [
  {
    id: 1,
    title: "Top Colleges for M.Tech in India",
    image: "/images/clgLogo.png",
  },
  {
    id: 2,
    title: "Top Colleges for M.Tech in India",
    image: "/images/clgLogo.png",
  },
  {
    id: 3,
    title: "Top Colleges for M.Tech in India",
    image: "/images/clgLogo.png",
  },
  {
    id: 4,
    title: "Top Colleges for M.Tech in India",
    image: "/images/clgLogo.png",
  },
  {
    id: 5,
    title: "Top Colleges for M.Tech in India",
    image: "/images/clgLogo.png",
  },
  {
    id: 6,
    title: "Top Colleges for M.Tech in India",
    image: "/images/clgLogo.png",
  },
  {
    id: 7,
    title: "Top Colleges for M.Tech in India",
    image: "/images/clgLogo.png",
  },
  {
    id: 8,
    title: "Top Colleges for M.Tech in India",
    image: "/images/clgLogo.png",
  },
  {
    id: 9,
    title: "Top Colleges for M.Tech in India",
    image: "/images/clgLogo.png",
  },
  {
    id: 10,
    title: "Top Colleges for M.Tech in India",
    image: "/images/clgLogo.png",
  },
  {
    id: 11,
    title: "Top Colleges for M.Tech in India",
    image: "/images/clgLogo.png",
  },
  {
    id: 12,
    title: "Top Colleges for M.Tech in India",
    image: "/images/clgLogo.png",
  },
  {
    id: 13,
    title: "Top Colleges for M.Tech in India",
    image: "/images/clgLogo.png",
  },
  {
    id: 14,
    title: "Top Colleges for M.Tech in India",
    image: "/images/clgLogo.png",
  },
  {
    id: 15,
    title: "Top Colleges for M.Tech in India",
    image: "/images/clgLogo.png",
  },
];

function TopCollection() {
  return (
    <div className="top-collection">
      {clgdata.map((x) => {
        return (
          <div key={x.id} className="card">
            <div>
              <div className="card-data">
                <p>{x.title}</p>
                <img src={x.image} />
              </div>
            </div>
          </div>
        );
      })}
      <Link to="/collegelist">
        <button>Show More</button>
      </Link>
    </div>
  );
}

export default TopCollection;
