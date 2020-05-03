import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import LandingPage from "./pages/landing-page";
import Register from "./pages/register";
import Regulations from "./pages/regulations";
import Registered from "./pages/registered";
import AboutProject from "./pages/about-project";

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.httpService = this.props.apiRestService.getInstance();
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <nav className="navbar navbar-light bg-light">
                        <Link to={'/places'} className="navbar-brand">
                            <div className="image"/>
                        </Link>

                        <Link to={'/about-project'} className="navbar-brand orange-text-color">
                            O projekcie
                        </Link>
                    </nav>
                    <div className={'container'} style={{minHeight: '100vh'}}>
                        <Switch>
                            <Route path={'/places'}>
                                <LandingPage httpService={this.httpService}/>
                            </Route>
                            <Route path={'/register'}>
                                <Register httpService={this.httpService}/>
                            </Route>
                            <Route path={'/regulations'}>
                                <Regulations/>
                            </Route>
                            <Route path={'/registered'}>
                                <Registered/>
                            </Route>
                            <Route path={'/about-project'}>
                                <AboutProject/>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}