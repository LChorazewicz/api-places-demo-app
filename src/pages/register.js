import * as React from "react";
import {Link} from "react-router-dom";

export default class Register extends React.Component {

    handleRegister(event) {
        event.preventDefault();
        event.stopPropagation();

        const email = event.target.email.value,
            phone = event.target.phone.value,
            password = event.target.password.value,
            name = event.target.name.value,
            regulationsAccepted = event.target.regulation.value === 'on';

        let formIsValid = true;

        if (formIsValid && (!(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) || email.length > 128)) {
            formIsValid = false;
        }

        if (formIsValid && !(phone.match(/^\d{9}$/))) {
            formIsValid = false;
        }

        if (formIsValid && (password.length < 6 || password.length > 23)) {
            formIsValid = false;
        }

        if (formIsValid && !regulationsAccepted) {
            formIsValid = false;
        }

        if (formIsValid && (name.length < 2 || name.length > 32)) {
            formIsValid = false;
        }

        if (formIsValid) {
            this.props.httpService.post(`/register`,
                JSON.stringify({
                    name: name,
                    email: email,
                    phone: phone,
                    password: password,
                    regulations_accepted: regulationsAccepted,
                })
            ).then(res => {
                window.location.href = '/registered'
            }).catch(error => console.log('error: ' + error))
        }
    }

    render() {
        return (
            <div className={'row'}>
                <div className="col-md-3"/>
                <form className={'col-md-6'} onSubmit={event => this.handleRegister(event)}>
                    <h3>Rejestracja</h3>
                    <div className="form-group">
                        <label htmlFor="name" className={'leftLabel'}>Imie</label>
                        <input type="text" className="form-control" id="name"
                               required={true}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className={'leftLabel'}>Email</label>
                        <input type="email" className="form-control" id="email"
                               required={true}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone" className={'leftLabel'}>Numer telefonu</label>
                        <input type="text" className="form-control" id="phone" required={true}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className={'leftLabel'}>Hasło (od 6 do 23 znaków)</label>
                        <input type="password" className="form-control" id="password" required={true}/>
                    </div>
                    <div className="form-check floatLeft">
                        <input type="checkbox" className="form-check-input" id="regulation" required={true}/>
                        <label className="form-check-label" htmlFor="regulation">Znam i akceptuję <Link
                            to={'/regulations'} style={{color: '#e3ab40', fontWeight: 900}}>regulamin
                            serwisu</Link></label>
                    </div>
                    <button className={'floatLeft btn registerButton col-md-12'}
                            style={{fontFamily: 'StandardLatoFont', fontWeight: 700}} color={'#e3ab40'}>Zarejestruj się
                    </button>
                </form>
                <div className="col-md-3"/>
            </div>
        );
    }
}