import InfoPoster from "./Info Poster/Index";
import InfoNavbtn from "./Info Poster/InfoNavbtn";
import LeftColumn from "./Left Column/Index";
import RightColumn from "./Right Column/Index";
import "./Info.css";
import Clgapplication from "./Clg Applications Form/Clgapplication";
import SimilarClgIITMadras from "./Similar Colleges to IIT Madras/Index.tsx";
import NearbyClgIITMadras from "./Nearby Colleges to IIT Madras/Index.tsx";
import IITMadrasNews from "./IIT Madars News/Index.tsx";
import PopularClg from "./Popular Colleges Compared With IIT Madras/Index.tsx";
import AnsweredQuestions from "./IIT Madras Answered Questions/Index.tsx";
import Comaprison from "./Popular Comparison/Index.tsx";

function Info() {
  return (
    <div className="main-info-conatiner">
      {/* POSTER  */}
      <InfoPoster />

      {/* NAV BUTTON LINE  */}
      <InfoNavbtn />

      <div className="CARDs">
        {/* COLLEGE APPLICATION FORM 2024 */}
        <Clgapplication />

        <div className="split-column">
          <div className="leftcolumn">
            <LeftColumn />
          </div>
          <div className="rightcolumn">
            <RightColumn />
          </div>
        </div>

        <Comaprison />
        <SimilarClgIITMadras />
        <NearbyClgIITMadras />
        <IITMadrasNews />
        <PopularClg />
        <AnsweredQuestions />
      </div>
    </div>
  );
}

export default Info;
