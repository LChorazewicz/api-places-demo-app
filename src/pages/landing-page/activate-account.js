import * as React from "react";

export default class ActivateAccount extends React.Component {
    handle(){
        this.props.httpService.post(`/activate/` + this.props.token
        ).then(res => {
            const token = res.data.token;

            window.location.href = '/places/platform/login/' + token
        }).catch((rawResponse) => {
            window.location.href = '/places/platform/already-activated'
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