import HomePage from "../HomePage";
import Page2 from "../Page2";
import WorkWithUs from "../WorkWithUs";
import MeetAhead from "../MeetAheadCard";
import SelfImprovement from "../SelfImprovement";
import RatingSkills from "../RatingSkills";
import Vacancies from "../Vacancies";
import StartTestPage from "../StartTestPage";
import Footer from "../Footer";

import "./index.css";

const AppBody = () => (
  <div className="app-body">
    <HomePage />
    <Page2 />
    <MeetAhead />
    <SelfImprovement />
    <RatingSkills />
    <StartTestPage />
    <WorkWithUs />
    <Vacancies />
    <Footer />
  </div>
);

export default AppBody;
