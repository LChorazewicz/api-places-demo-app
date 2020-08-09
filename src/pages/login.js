import * as React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

export default class Login extends React.Component {
    state = {
        lastError: ''
    }

    handleLogin(event) {
        event.preventDefault();
        event.stopPropagation();

        const email = event.target.email.value,
            password = event.target.password.value;

        let formIsValid = true;

        if (formIsValid && (!(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) || email.length > 128)) {
            formIsValid = false;
        }

        if (formIsValid && (password.length < 6 || password.length > 23)) {
            formIsValid = false;
        }

        if (formIsValid) {
            this.props.httpService.post(`/token`, JSON.stringify({
                login: email,
                password: password
            })).then(res => {
                this.handleLoginWithToken(res.data.token);
                window.location.href = '/places/account/dashboard'
            }).catch((rawResponse) => {
                const message = rawResponse.response.data.error;

                if (message) {
                    this.setState({'lastError': message});
                }
            })
        }
    }

    componentDidMount() {
        this.handleLoginWithToken(this.props.token);

        if (this.props.token && localStorage.getItem('token')) {
            window.location.href = '/places/account/dashboard'
        }
    }

    handleLoginWithToken(token) {
        if (token && token.length > 10) {
            localStorage.setItem('token', token)
        }
    }

    render() {
        let errorMessage = '';

        if (this.state.lastError) {
            errorMessage = <div className="alert alert-danger" role="alert" style={{lineHeight: '19px'}}>
                {this.state.lastError}
            </div>
        }

        return (
            <div>
                <Header/>
                <div className={'container h-100'} style={{minHeight: '100vh'}}>
                    <div className={'row'}>
                        <div className="col-md-3"/>
                        <form className={'col-md-6'} onSubmit={event => this.handleLogin(event)}>
                            <h3>Logowanie</h3>
                            {errorMessage}
                            <div className="form-group">
                                <label htmlFor="email" className={'leftLabel'}>Login</label>
                                <input type="email" className="form-control" id="email"
                                       required={true}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className={'leftLabel'}>Hasło</label>
                                <input type="password" className="form-control" id="password" required={true}/>
                            </div>

                            <button className={'floatLeft btn registerButton col-md-12'}
                                    style={{fontFamily: 'StandardLatoFont', fontWeight: 700}} color={'#e3ab40'}>Zaloguj
                                się
                            </button>
                        </form>
                        <div className="col-md-3"/>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}