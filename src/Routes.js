import { Route, Switch, Redirect } from "react-router-dom";

import Homepage from "./Homepage";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import JobList from "./JobList";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import ProfileForm from "./ProfileForm";
import ProtectedRoute from "./ProtectedRoutes";

/** Routes for App 
 * 
 *  Props:
 *  - handleLogin: function to be called in parent
 *  - handleSignUp: function to be called in parent
 * 
 *  State: 
 *  - None
 * 
 *  App -> Routes 
 *     -> { Homepage, 
 *          CompanyList, 
 *          CompanyDetail, 
 *          JobList,
 *          LoginForm,
 *          SignUpForm,
 *          ProfileForm,
 *          }
*/
function Routes({ handleLogin, handleSignUp }) {
    return (
        <Switch>
            <ProtectedRoute exact path="/companies">
                <CompanyList />
            </ProtectedRoute>
            <ProtectedRoute exact path="/companies/:handle">
                <CompanyDetail />
            </ProtectedRoute>
            <ProtectedRoute exact path="/jobs">
                <JobList />
            </ProtectedRoute>
            <ProtectedRoute exact path="/profile">
                <ProfileForm />
            </ProtectedRoute>
            <Route exact path="/login">
                <LoginForm handleLogin={handleLogin} />
            </Route>
            <Route exact path="/signup">
                <SignUpForm handleSignUp={handleSignUp} />
            </Route>
            <Route exact path="/">
                <Homepage />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}
export default Routes;