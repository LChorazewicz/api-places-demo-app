import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LandingPage from "./pages/landing-page";
import Register from "./pages/register";
import Regulations from "./pages/regulations";
import Registered from "./pages/registered";
import AboutProject from "./pages/about-project";
import Header from "./component/Header";
import Footer from "./component/Footer";

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.httpService = this.props.apiRestService.getInstance();
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route exact path={'/places'}>
                            <Header/>
                            <div className={'container h-100'} style={{minHeight: '100vh'}}>
                                <LandingPage httpService={this.httpService}/>
                            </div>
                            <Footer />
                        </Route>
                        <Route exact path={'/places/register'}>
                            <Header/>
                            <div className={'container h-100'} style={{minHeight: '100vh'}}>
                                <Register httpService={this.httpService}/>
                            </div>
                            <Footer />
                        </Route>
                        <Route exact path={'/places/regulations'}>
                            <Header/>
                            <div className={'container h-100'} style={{minHeight: '100vh'}}>
                                <Regulations/>
                            </div>
                            <Footer />
                        </Route>
                        <Route exact path={'/places/registered'}>
                            <Header/>
                            <div className={'container h-100'} style={{minHeight: '100vh'}}>
                                <Registered/>
                            </div>
                            <Footer />
                        </Route>
                        <Route exact path={'/places/about-project'}>
                            <Header/>
                            <div className={'container h-100'} style={{minHeight: '100vh'}}>
                                <AboutProject/>
                            </div>
                            <Footer />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}