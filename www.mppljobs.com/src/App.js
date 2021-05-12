import { BrowserRouter as Router, Route } from "react-router-dom";
import Index from "./components/Index";
import ContactUs from "./components/Pages/ContactUs";
import JobSingle from "./components/Pages/JobSingle";
import PricingPlan from "./components/Pages/PricingPlan";
import AboutUs from "./components/Pages/AboutUs";
import FAQ from "./components/Pages/FAQ";
import TermsConditions from "./components/Pages/Terms&Conditions";
import JobListClassic from "./components/Pages/JobListClassic";
import CandidateResume from "./components/Pages/Candidates/CandidateResume";
import EmployersProfile from "./components/Pages/Employers/EmployersProfile";
import EmployersList from "./components/Pages/EmployersList";
import WebinarsList from "./components/Pages/Webinars/WebinarsList";
import NotesList from "./components/Pages/Notes/NotesList";
import MockTestsList from "./components/Pages/MockTests/MockTestsList";
import ConsultantsList from "./components/Pages/Consultants/ConsultantsList";
import Consultant from "./components/Pages/Consultants/Consultant";
import AboutCandidate from "./components/Pages/Candidates/AboutCandidate";
import EmployerList from "./components/Pages/Employers/EmployerList";
import CandidateList from "./components/Pages/Candidates/CandidateList";

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Index}></Route>
        <Route path="/contact-us" component={ContactUs}></Route>
        <Route path="/pricing-plans" component={PricingPlan}></Route>
        <Route path="/job-single" component={JobSingle}></Route>
        <Route path="/about-us" component={AboutUs}></Route>
        <Route path="/faq" component={FAQ}></Route>
        <Route path="/terms-conditions" component={TermsConditions}></Route>
        <Route path="/jobs-list-classic" component={JobListClassic}></Route>
        <Route path="/candidate-resume" component={CandidateResume}></Route>
        <Route path="/employers-profile" component={EmployersProfile}></Route>
        <Route path="/employers-list" component={EmployersList}></Route>
        <Route path="/webinars-list" component={WebinarsList}></Route>
        <Route path="/notes-list" component={NotesList}></Route>
        <Route path="/mock-tests-list" component={MockTestsList}></Route>
        <Route path="/consultant" component={Consultant}></Route>
        <Route path="/consultants-list" component={ConsultantsList}></Route>
        <Route path="/about-candidate" component={AboutCandidate}></Route>
        <Route path="/employer-list" component={EmployerList}></Route>
        <Route path="/candidate-list" component={CandidateList}></Route>
      </Router>
    </div>
  );
}

export default App;
