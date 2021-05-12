import { Fragment, useEffect, useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import index from "./components";
import AddAdmin from "./components/Pages/Admins/AddAdmin";
import Admins from "./components/Pages/Admins/Admins";
import BlockedAdmins from "./components/Pages/Admins/BlockedAdmins";
import EditAdmin from "./components/Pages/Admins/EditAdmin";
import AddCandidates from "./components/Pages/Candidates/AddCandidates";
import BlockedCandidates from "./components/Pages/Candidates/BlockedCandidates";
import Candidates from "./components/Pages/Candidates/Candidates";
import EditCandidate from "./components/Pages/Candidates/EditCandidate";
import AddConsultant from "./components/Pages/Consultants/AddConsultant";
import BlockedConsultants from "./components/Pages/Consultants/BlockedConsultants";
import Consultants from "./components/Pages/Consultants/Consultants";
import EditConsultant from "./components/Pages/Consultants/EditConsultant";
import AddEmployer from "./components/Pages/Employer/AddEmployer";
import EditEmployer from "./components/Pages/Employer/EditEmployer";
import Employers from "./components/Pages/Employer/Employers";
import AddJobs from "./components/Pages/Jobs/AddJobs";
import Categories from "./components/Pages/Jobs/Categories";
import EditJob from "./components/Pages/Jobs/EditJob";
import InactiveJobs from "./components/Pages/Jobs/InactiveJobs";
import OldJobs from "./components/Pages/Jobs/InactiveJobs";
import PendingJobs from "./components/Pages/Jobs/PendingJobs";
import PostedJobs from "./components/Pages/Jobs/PostedJobs";
import ForgotPassword from "./components/Pages/Login/ForgotPassword";
import Login from "./components/Pages/Login/Login";
import Verify from "./components/Pages/Login/Verify";
import ActiveMockTest from "./components/Pages/MockTests/ActiveMockTest";
import AddMockTest from "./components/Pages/MockTests/AddMockTest";
import EditMockTest from "./components/Pages/MockTests/EditMockTest";
import PastMockTest from "./components/Pages/MockTests/PastMockTest";
import AddNotes from "./components/Pages/Notes/AddNotes";
import EditNotes from "./components/Pages/Notes/EditNotes";
import Notes from "./components/Pages/Notes/Notes";
import Profile from "./components/Pages/Profile/Profile";
import EditSubscriptionPlan from "./components/Pages/Subscription/EditSubscriptionPlan";
import SubscriptionPlan from "./components/Pages/Subscription/SubscriptionPlan";
import Transaction from "./components/Pages/Subscription/Transactions";
import AddWebinar from "./components/Pages/Webinars/AddWebinar";
import EditWebinars from "./components/Pages/Webinars/EditWebinars";
import PastWebinars from "./components/Pages/Webinars/PastWebinars";
import Webinars from "./components/Pages/Webinars/Webinars";
import store from "./Store";
function App() {
  // const [role, setRole] = useState(
  //   JSON.parse(localStorage.getItem("adminRole") || [])
  // );
  // useEffect(() => {
  //   setRole(JSON.parse(localStorage.getItem("adminRole")));
  // });
  localStorage.setItem("adminRole", JSON.stringify([]));
  return (
    <>
      <Fragment>
        <Provider store={store}>
          <Router>
            <Route exact path="/" component={Login}></Route>
            <Route path="/forgot-password" component={ForgotPassword}></Route>
            <Route path="/verify" component={Verify}></Route>
            <Route path="/home" component={index}></Route>

            {/* Jobs
            {role.includes("All") || role.includes("Jobs") ? (
              <> */}
            <Route path="/add-jobs" component={AddJobs}></Route>
            <Route path="/pending-jobs" component={PendingJobs}></Route>
            <Route path="/posted-jobs" component={PostedJobs}></Route>
            <Route path="/old-jobs" component={OldJobs}></Route>
            <Route path="/edit-jobs" component={EditJob}></Route>
            <Route path="/categories" component={Categories}></Route>
            {/* </>
            ) : (
              <></>
            )} */}

            {/* Candidates
            {role.includes("All") || role.includes("Candidates") ? (
              <> */}
            <Route path="/add-candidates" component={AddCandidates}></Route>
            <Route path="/candidates" component={Candidates}></Route>
            <Route path="/edit-candidate" component={EditCandidate}></Route>
            <Route
              path="/blocked-candidates"
              component={BlockedCandidates}
            ></Route>
            {/* </>
            ) : (
              <></>
            )} */}

            {/* Employers
            {role.includes("All") || role.includes("Employers") ? (
              <> */}
            <Route path="/add-employer" component={AddEmployer}></Route>
            <Route path="/employers" component={Employers}></Route>
            <Route path="/edit-employer" component={EditEmployer}></Route>
            <Route path="/inactive-employers" component={InactiveJobs}></Route>
            {/* </>
            ) : (
              <></>
            )} */}

            {/* Notes
            {role.includes("All") || role.includes("Notes") ? (
              <> */}
            <Route path="/add-notes" component={AddNotes}></Route>
            <Route path="/edit-notes" component={EditNotes}></Route>
            <Route path="/notes" component={Notes}></Route>
            {/* </>
            ) : (
              <></>
            )} */}

            {/* Mocktests
            {role.includes("All") || role.includes("MockTests") ? (
              <> */}
            <Route path="/add-mock-test" component={AddMockTest}></Route>
            <Route path="/active-mock-test" component={ActiveMockTest}></Route>
            <Route path="/edit-mock-test" component={EditMockTest}></Route>
            <Route path="/past-mock-test" component={PastMockTest}></Route>
            {/* </>
            ) : (
              <></>
            )} */}

            {/* Admins
            {role.includes("All") || role.includes("Admins") ? (
              <> */}
            <Route path="/add-admin" component={AddAdmin}></Route>
            <Route path="/admins" component={Admins}></Route>
            <Route path="/edit-admin" component={EditAdmin}></Route>
            <Route path="/blocked-admins" component={BlockedAdmins}></Route>
            {/* </>
            ) : (
              <></>
            )} */}

            {/* Webinars
            {role.includes("All") || role.includes("Webinars") ? (
              <> */}
            <Route path="/add-webinar" component={AddWebinar}></Route>
            <Route path="/webinars" component={Webinars}></Route>
            <Route path="/edit-webinar" component={EditWebinars}></Route>
            <Route path="/past-webinars" component={PastWebinars}></Route>
            {/* </>
            ) : (
              <></>
            )} */}

            {/* consultants
            {role.includes("All") || role.includes("Consultants") ? (
              <> */}
            <Route path="/add-consultant" component={AddConsultant}></Route>
            <Route path="/consultants" component={Consultants}></Route>
            <Route path="/edit-consultant" component={EditConsultant}></Route>
            <Route
              path="/blocked-consultants"
              component={BlockedConsultants}
            ></Route>
            {/* </>
            ) : (
              <></>
            )} */}

            {/* Subscriptions plans
            {role.includes("All") || role.includes("Subscription") ? (
              <> */}
            <Route
              path="/subscription-plan"
              component={SubscriptionPlan}
            ></Route>
            <Route path="/transactions" component={Transaction}></Route>

            <Route
              path="/edit-subscription-plan"
              component={EditSubscriptionPlan}
            ></Route>
            {/* </>
            ) : (
              <></>
            )} */}
            <Route path="/profile" component={Profile}></Route>
          </Router>
        </Provider>
      </Fragment>
    </>
  );
}

export default App;
