import {Link} from "react-router-dom";
import React from "react";

export default class LoggedHeader extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <Link to={'/places/account/dashboard'} className="navbar-brand">
                        <div className="image"/>
                    </Link>

                    <div className={'d-flex flex-nowrap'}>
                        <Link to={'/places/account/logout'} className="navbar-brand orange-text-color order-1 p-2">
                            Wyloguj
                        </Link>
                    </div>
                </nav>
                <br/>
                <nav className="navbar navbar-expand-sm">
                    <div className="col-xl-2 col-lg-1 col-md-1 col-sm-1 col-xl-1" />
                    <div className={'col-xl-8 col-lg-10 col-md-10 col-sm-10 col-xs-10'}>
                        <ul className="navbar-nav w-100 justify-content-between align-items-center">
                            <Link to={'/places/account/dashboard'} style={{textDecoration: 'none'}}>
                                <li className="nav-item">
                                    <span className="nav-link align-middle text-center">Dashboard</span>
                                </li>
                            </Link>
                            <Link to={'/places/account/places-api-and-widget'} style={{textDecoration: 'none'}}>
                                <li className="nav-item">
                                    <span className="nav-link align-middle text-center">PlacesAPI i PlacesWidget</span>
                                </li>
                            </Link>
                            <Link to={'/places/account/services'} style={{textDecoration: 'none'}}>
                                <li className="nav-item">
                                    <span className="nav-link align-middle text-center">Usługi i pakiety</span>
                                </li>
                            </Link>
                            <Link to={'/places/account/settings'} style={{textDecoration: 'none'}}>
                                <li className="nav-item">
                                    <span className="nav-link align-middle text-center">Ustawienia</span>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}