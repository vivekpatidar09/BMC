import "./Index.css";
import Videos from "../Right Column/Videos file/Index.tsx";
import TopCourses from "../Right Column/Top Courses/Index";
import Photos from "../Right Column/Photos/Index.tsx";
import SameGroup from "./Other Colleges in The Same Group/Index.tsx";
import News from "../Right Column/News/Index.tsx";
import Notification from "./Notificationss/Index";
import Department from "./Departments/Index";
import Placement from "./Placement/Index";

function Index() {
  return (
    <div>
      <Videos />
      <TopCourses />
      <Photos />
      <SameGroup />
      <News />
      <Notification />
      <Department />
      <Placement />
    </div>
  );
}

export default Index;
