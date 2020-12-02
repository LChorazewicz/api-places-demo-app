import {Link} from "react-router-dom";
import React from "react";

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <Link to={'/places'} className="navbar-brand">
                        <div className="image"/>
                    </Link>

                    <div className={'d-flex flex-nowrap'}>
                        <Link to={'/places/about-project'} className="navbar-brand orange-text-color order-2 p-2">
                            O projekcie
                        </Link>
                        <Link to={'/places/platform/login'} className="navbar-brand orange-text-color order-1 p-2">
                            Logowanie
                        </Link>
                    </div>
                </nav>
            </div>
        );
    }
}