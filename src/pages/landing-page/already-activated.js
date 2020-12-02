import * as React from "react";

export default class AlreadyActivated extends React.Component {
    componentDidMount() {
        localStorage.removeItem('token');
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="textAlignLeft col-md-12">
                        Konto już zostało aktywowane
                    </div>
                </div>

            </div>
        );
    }
}