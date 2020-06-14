import Footer from "../../component/Footer";
import * as React from "react";
import LoggedHeader from "../../component/LoggedHeader";

export default class PaymentMethod extends React.Component {
    state = {
        methods: []
    };

    componentDidMount() {
        if (!localStorage.getItem('token')) {
            window.location.href = '/places';
        }

        if(this.props.services.length < 1){
            window.location.href = '/places';
        }

        this.getMethods()
    }

    getMethods() {
        this.props.httpService.get(`/payment-methods`).then(res => {
            this.setState({methods: res.data});
        }).catch((rawResponse) => {
            const message = rawResponse.response.data.error;

            if (message) {
                this.setState({'lastError': message});
            }
        })
    }

    handleSelectMethod(id) {
        this.props.httpService.get(`/payment-link?method=` + id).then(res => {
            window.location.href = res.data.link;
        }).catch((rawResponse) => {
            const message = rawResponse.response.data.error;

            if (message) {
                this.setState({'lastError': message});
            }
        })
    }

    render() {
        return <div>
            <LoggedHeader/>
            <div className={'container h-100'} style={{minHeight: '100vh'}}>
                <div>
                    <h3>Wybierz metodę płatności</h3><br/>
                    {this.state.methods.map(method => {
                        return <div key={method.id} className={'card mb-3 payment-method'}
                                        style={{
                                            maxWidth: '18rem',
                                            display: 'inline-flex',
                                            margin: '5px',
                                            width: '150px',
                                            height: '75px',
                                            cursor: 'pointer'
                                        }}
                                        onClick={() => this.handleSelectMethod(method.id)}
                        >
                            <div className={"card-body text-dark"} style={{padding: 0}}>
                                <img style={{width: '146px', height: '73px'}} className={"card-text"} src={method.logo}
                                     alt={method.name}/>
                            </div>
                        </div>;
                    })}
                </div>
            </div>
            <Footer/>
        </div>;
    }
}