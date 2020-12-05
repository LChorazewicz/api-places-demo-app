import * as React from "react";

export default class ActivateAccount extends React.Component {
    handle(){
        this.props.httpService.post(`/activate/` + this.props.token
        ).then(res => {
            window.location.href = '/places/platform/login'
        }).catch((rawResponse) => {
            window.location.href = '/places/platform/login'
        })
    }
    componentDidMount() {
        this.handle()
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}