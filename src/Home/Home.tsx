import Poster from "./Poster/Poster";
import "./Home.css";
import StudyGoal from "./StudyGoal/StudyGoal.tsx";
import TopCollection from "./Top Collection/TopCollection.tsx";
import ExploreProgram from "./Explore Program/ExploreProgram.tsx";
import LatestNotification from "./Latest Notification/LatestNotification.tsx";
import TopUniversitiesClg from "./Top Universities-Colleges/TopUniversitiesClg.tsx";
import CollegeRanking from "./College Ranking/CollegeRanking.tsx";
import TopStudyPlaces from "./Top Study Places/TopStudyPlaces.tsx";
import ExploreCourses from "./Explore Courses/ExploreCourses.tsx";
import TopExam from "./Top Exam/TopExam.tsx";
import LatestBlog from "./Latest Blog/LatestBlog.tsx";
import StudyAbroad from "./Study Abroad/StudyAbroad.tsx";
import TopCourses from "./Top Courses/TopCourses.tsx";

function Home() {
  return (
    <div className="Home">
      <Poster />

      {/* C O N T E N T  */}

      <div className="home-container">
        {/* Card 1  */}

        <div>
          <h1>Select Your Study Goal</h1>
          <StudyGoal />
        </div>

        {/* Card 2  */}

        <div>
          <h1>Top Collections</h1>
          <TopCollection />
        </div>

        {/* Card 3 */}
        <div>
          <h1>Explore Programs</h1>
          <ExploreProgram />
        </div>

        {/* Card 4 */}
        <div className="card4">
          <h1>Latest Notification</h1>
          <div className="navbtn">
            <button>All</button>
            <button>National</button>
            <button>State</button>
          </div>
          <LatestNotification />
        </div>

        {/* Card 5 */}
        <div>
          <h1>Top Universities/Colleges</h1>
          <TopUniversitiesClg />
        </div>

        {/* Card 6 */}

        <div className="card6">
          <div className="col1">
            <h2>Know your chances of Admission</h2>
            <button>Start Now</button>
          </div>
          <div>
            <img src="/images/card6img1.png" alt="" />
          </div>
        </div>

        {/* Card 7 */}
        <div className="card7">
          <h1>College Ranking 2023</h1>
          <div className="btns">
            <div className="selectbtn">
              <button>
                <select name="" id="">
                  <option value="">Ranking: 2022</option>
                </select>
              </button>
            </div>
            <p>|</p>
            <p>Agencies :</p>
            <div className="navbtn">
              <button>Indiatoday</button>
              <button>Business Today</button>
              <button>FINANCIAL TIMES</button>
              <button>Finacial Express</button>
            </div>
          </div>
          <CollegeRanking />
        </div>

        {/* Card 8 */}
        <div className="card8 card6">
          <div className="col1">
            <h2>Subscribe For Regular Alerts</h2>
            <button>Subscribe Now</button>
          </div>
          <div>
            <img src="/images/card8img1.png" alt="" />
          </div>
        </div>

        {/* Card 9 */}

        <div>
          <h1>Top Study Places</h1>
          <TopStudyPlaces />
        </div>

        {/* Card 10 */}
        <div className="card10">
          <h1>Explore Courses</h1>
          <div className="navbtn">
            <button>Bachelors</button>
            <button>Masters</button>
            <button>Doctorate</button>
            <button>Diploma</button>
            <button>Certification</button>
          </div>
          <ExploreCourses />
        </div>

        {/* Card 11 */}
        <div>
          <h1>Top Exams</h1>
          <TopExam />
        </div>

        {/* Card 12 */}
        <div className="card12">
          <h1>Latest Blogs</h1>
          <div className="navbtn">
            <button>Exam Alerts</button>
            <button>College Alerts</button>
            <button>Admission Alerts</button>
          </div>
          <LatestBlog />
        </div>

        {/* Card 13 */}
        <div>
          <h1>Study Abroad</h1>
          <StudyAbroad />
        </div>

        {/* Card 14 */}
        <div>
          <TopCourses />
        </div>

        {/* Card 15 */}
      </div>
    </div>
  );
}

export default Home;
