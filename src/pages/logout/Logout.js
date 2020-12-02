import React from "react";

export default class Logout extends React.Component {
    componentDidMount() {
        if(localStorage.getItem('token')){
            localStorage.removeItem('token');
        }

        window.location.href = '/places'
    }

    render() {
        return (
            <div />
        );
    }
}