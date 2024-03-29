import "./Index.css";
import SearchCourse from "./Search Course/SearchCourse";
import Courses from "./Courses Offered/Index";
import IitMadrasfees from "./IIT Madras fees/Index";
import IitMadrasfacilities from "../IIT Madras Facilities/Index.tsx";
import IitMadrasreview from "./IIT Madras Reviews/Index";
import Admissionprocess from "./Admision Process/Index";
import IitMadrascutoff from "./IIT Madras CutOff/Index";
import IITMadrasAdmission from "./IIT Madras Admission/Index";
import IITMadarsPlacement from "./IIT Madars Placement/Index";
import IITMadrasFaculty from "./IIT Madras Faculty/Index.tsx";
import IITMadrasRanking from "./IIT Madras Ranking/Index.tsx";
import IITMadrasBrochure from "./IIT Madras Brochure/Index";
import IITMadrasLocation from "./IIT Madras Location/Index";
import Comments from "./Comments/Index";

function Index() {
  return (
    <div>
      <SearchCourse />
      <Courses />
      <IitMadrasfees />
      <IitMadrasfacilities />
      <IitMadrasreview />
      <Admissionprocess />
      <IitMadrascutoff />
      <IITMadrasAdmission />
      <IITMadarsPlacement />
      <IITMadrasFaculty />
      <IITMadrasRanking />
      <IITMadrasBrochure />
      <IITMadrasLocation />
      <Comments />
    </div>
  );
}

export default Index;
