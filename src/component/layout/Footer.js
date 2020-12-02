import React from "react";

export default class Footer extends React.Component {
    render() {
        return (
            <div>
                <h5 className={'textAlignCenter'}>Aplikacja stworzona przez firmę <a
                    href={'https://softwareservice.pl/'}
                    className={'bold-orange-link'}>SoftwareService</a>.
                </h5>
            </div>
        );
    }
}