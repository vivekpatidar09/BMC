import LatestBlog from "../Home/Latest Blog/LatestBlog";
import "./CollegeList.css";
import ListCard from "./ListCard";

function HomeList() {
  return (
    <>
      <div className="list-container">
        <div className="head-card">
          <h4>Top Colleges in India February 2024</h4>
          <h5> List Of 27249 colleges in India</h5>
          <p>
            India has developed a significant number of higher education
            institutions over time to meet the demand of the expanding youth
            population by providing quality education, so we have prepared a
            list of top colleges in India 2023. These colleges have established
            themselves not only nationally but also internationally. India has
            long been a centre for
          </p>
          <a href="#">Read More</a>
        </div>
        <ListCard />
        <LatestBlog />
      </div>
    </>
  );
}

export default HomeList;
