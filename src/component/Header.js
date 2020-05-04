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

                    <Link to={'/places/about-project'} className="navbar-brand orange-text-color">
                        O projekcie
                    </Link>
                </nav>
            </div>
        );
    }
}