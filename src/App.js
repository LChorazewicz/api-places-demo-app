import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import LandingPage from "./pages/landing-page";
import Register from "./pages/register";
import Regulations from "./pages/regulations";
import Registered from "./pages/registered";
import AboutProject from "./pages/about-project";
import Header from "./component/Header";
import Footer from "./component/Footer";
import ActivateAccount from "./pages/activate-account";
import AlreadyActivated from "./pages/already-activated";
import Login from "./pages/login";
import Dashboard from "./pages/account/Dashboard";
import Logout from "./pages/account/Logout";
import PlacesApiAndWidget from "./pages/account/PlacesApiAndWidget";
import Settings from "./pages/account/Settings";
import Services from "./pages/account/Services";
import PaymentMethod from "./pages/account/PaymentMethod";

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.httpService = this.props.apiRestService.getInstance();

        const token = localStorage.getItem('token')

        if (token) {
            this.apiAccountRestService = this.props.apiRestService.getInstance();
        }
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route exact path={'/'}>
                            <Redirect to={'/places'}/>
                        </Route>
                        <Route exact path={'/places'}>
                            <Header/>
                            <div className={'container h-100'} style={{minHeight: '100vh'}}>
                                <LandingPage httpService={this.httpService}/>
                            </div>
                            <Footer/>
                        </Route>
                        <Route exact path={'/places/register'}>
                            <Header/>
                            <div className={'container h-100'} style={{minHeight: '100vh'}}>
                                <Register httpService={this.httpService}/>
                            </div>
                            <Footer/>
                        </Route>
                        <Route exact path={'/places/regulations'}>
                            <Header/>
                            <div className={'container h-100'} style={{minHeight: '100vh'}}>
                                <Regulations/>
                            </div>
                            <Footer/>
                        </Route>
                        <Route exact path={'/places/registered'}>
                            <Header/>
                            <div className={'container h-100'} style={{minHeight: '100vh'}}>
                                <Registered/>
                            </div>
                            <Footer/>
                        </Route>
                        <Route exact path={'/places/about-project'}>
                            <Header/>
                            <div className={'container h-100'} style={{minHeight: '100vh'}}>
                                <AboutProject/>
                            </div>
                            <Footer/>
                        </Route>
                        <Route exact path={'/places/activate-account/:token'} render={
                            ({match}) => <ActivateAccount httpService={this.httpService} token={match.params.token}/>
                        }>
                        </Route>
                        <Route exact path={'/places/login/:token'} render={
                            ({match}) => <Login httpService={this.httpService} token={match.params.token}/>
                        }>
                        </Route>
                        <Route exact path={'/places/login'}>
                            <Login httpService={this.httpService}/>
                        </Route>
                        <Route exact path={'/places/already-activated'}>
                            <Header/>
                            <div className={'container h-100'} style={{minHeight: '100vh'}}>
                                <AlreadyActivated/>
                            </div>
                            <Footer/>
                        </Route>
                        <Route exact path={'/places/account/dashboard'} render={
                            ({match}) => <Dashboard httpService={this.apiAccountRestService}
                                                    token={match.params.token}/>
                        }/>
                        <Route exact path={'/places/account/places-api-and-widget'} render={
                            ({match}) => <PlacesApiAndWidget httpService={this.apiAccountRestService}
                                                             token={match.params.token}/>
                        }/>
                        <Route exact path={'/places/account/services'} render={
                            ({match}) => <Services httpService={this.apiAccountRestService} token={match.params.token}/>
                        }/>
                        <Route path={'/places/account/payments/methods/:services'} render={
                            ({match}) => <PaymentMethod httpService={this.apiAccountRestService}
                                                        token={match.params.token} services={match.params.services}/>
                        }/>
                        <Route exact path={'/places/account/settings'} render={
                            ({match}) => <Settings httpService={this.apiAccountRestService} token={match.params.token}/>
                        }/>
                        <Route exact path={'/places/account/logout'} render={
                            ({match}) => <Logout httpService={this.apiAccountRestService}/>
                        }/>
                    </Switch>
                </div>
            </Router>
        );
    }
}