import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import LandingPage from "./pages/landing-page/landing-page";
import Register from "./pages/landing-page/register";
import Regulations from "./pages/landing-page/regulations";
import Registered from "./pages/landing-page/registered";
import AboutProject from "./pages/landing-page/about-project";
import Footer from "./component/layout/Footer";
import ActivateAccount from "./pages/landing-page/activate-account";
import AlreadyActivated from "./pages/landing-page/already-activated";
import Login from "./pages/landing-page/login";
import Dashboard from "./pages/dashboard/Dashboard";
import Logout from "./pages/logout/Logout";
import Settings from "./pages/settings/Settings";
import PaymentMethod from "./pages/payments/PaymentMethod";
import AccessToken from "./pages/access/AccessToken";
import LandingHeader from "./component/layout/LandingHeader";
import Subscription from "./pages/subscription/Subscription";
import Payment from "./pages/payments/Payment";

export default class App extends React.Component {

    constructor(props) {
        super(props);
        const token = localStorage.getItem('token')

        this.appConfigProvider = this.props.appConfigProvider;
        this.httpService = this.props.apiRestService.getInstance();
        this.notificator = this.props.notificator;

        if (token) {
            this.apiAccountRestService = this.props.apiAccountRestService.getInstance();
        }
    }

    render() {
        const isAuthorized = localStorage.getItem('token');

        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route exact path={'/'}>
                            <Redirect to={'/places'}/>
                        </Route>
                        <Route exact path={'/places'}>
                            <LandingHeader/>
                            <div className={'container h-100'} style={{minHeight: '100vh'}}>
                                <LandingPage httpService={this.httpService}
                                             appConfigProvider={this.props.appConfigProvider}/>
                            </div>
                            <Footer/>
                        </Route>
                        <Route exact path={'/places/platform/register'}>
                            <LandingHeader/>
                            <div className={'container h-100'} style={{minHeight: '100vh'}}>
                                <Register httpService={this.httpService}/>
                            </div>
                            <Footer/>
                        </Route>
                        <Route exact path={'/places/platform/regulations'}>
                            <LandingHeader/>
                            <div className={'container h-100'} style={{minHeight: '100vh'}}>
                                <Regulations/>
                            </div>
                            <Footer/>
                        </Route>
                        <Route exact path={'/places/platform/registered'}>
                            <LandingHeader/>
                            <div className={'container h-100'} style={{minHeight: '100vh'}}>
                                <Registered/>
                            </div>
                            <Footer/>
                        </Route>
                        <Route exact path={'/places/about-project'}>
                            <LandingHeader/>
                            <div className={'container h-100'} style={{minHeight: '100vh'}}>
                                <AboutProject/>
                            </div>
                            <Footer/>
                        </Route>
                        <Route exact path={'/places/platform/activate-account/:token'} render={
                            ({match}) => <ActivateAccount httpService={this.httpService} token={match.params.token}/>
                        }>
                        </Route>
                        <Route exact path={'/places/platform/login'}>
                            <LandingHeader/>
                            <Login httpService={this.httpService}
                                   notificator={this.props.notificator}
                            />
                            <Footer/>
                        </Route>
                        <Route exact path={'/places/platform/already-activated'}>
                            <LandingHeader/>
                            <div className={'container h-100'} style={{minHeight: '100vh'}}>
                                <AlreadyActivated/>
                            </div>
                            <Footer/>
                        </Route>
                        <Route exact path={'/places/platform/dashboard'} render={
                            ({match}) => isAuthorized ? <Dashboard httpService={this.apiAccountRestService}
                                                                   token={match.params.token}/> :
                                <Redirect to={'/places'}/>
                        }/>
                        <Route exact path={'/places/platform/access-token'} render={
                            ({match}) => isAuthorized ? <AccessToken
                                customerConfigProvider={this.props.customerConfigProvider}
                                notificator={this.props.notificator}
                                httpService={this.httpService}
                            /> : <Redirect to={'/places'}/>
                        }/>
                        <Route exact path={'/places/platform/subscription'} render={
                            ({match}) => isAuthorized ?
                                <Subscription
                                    httpService={this.apiAccountRestService}
                                    notificator={this.props.notificator}
                                    token={match.params.token}/> :
                                <Redirect to={'/places'}/>
                        }/>
                        <Route exact path={'/places/platform/payments'} render={
                            ({match}) => isAuthorized ?
                                <Payment httpService={this.apiAccountRestService} token={match.params.token}/> :
                                <Redirect to={'/places'}/>
                        }/>
                        <Route path={'/places/platform/payments/methods/:services'} render={
                            ({match}) => isAuthorized ? <PaymentMethod httpService={this.apiAccountRestService}
                                                                       token={match.params.token}
                                                                       services={match.params.services}/> :
                                <Redirect to={'/places'}/>
                        }/>
                        <Route exact path={'/places/platform/settings'} render={
                            ({match}) => isAuthorized ? <Settings
                                httpService={this.apiAccountRestService}
                                notificator={this.props.notificator}
                            /> : <Redirect to={'/places'}/>
                        }/>
                        <Route exact path={'/places/platform/logout'} render={
                            ({match}) => isAuthorized ? <Logout httpService={this.apiAccountRestService}/> :
                                <Redirect to={'/places'}/>
                        }/>
                    </Switch>
                </div>
            </Router>
        );
    }
}