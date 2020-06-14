import Footer from "../../component/Footer";
import * as React from "react";
import LoggedHeader from "../../component/LoggedHeader";

export default class Settings extends React.Component {
    componentDidMount() {
        if (!localStorage.getItem('token')) {
            window.location.href = '/places';
        }
    }

    render() {
        return (
            <div>
                <LoggedHeader/>
                <div className={'container h-100'} style={{minHeight: '100vh'}}>
                    <h3 className={'text-left'}>Dane do faktury</h3>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="name" className={'leftLabel'}>Nabywca</label>
                                <input type="text" className="form-control" id="access-token"
                                       required={true}/>
                                <br/>
                                <label htmlFor="name" className={'leftLabel'}>NIP (jeśli faktura jest wystawiana na firmę)</label>
                                <input type="text" className="form-control" id="access-token"
                                       required={true}/>
                                <br/>
                                <label htmlFor="name" className={'leftLabel'}>Ulica i numer lokalu</label>
                                <input type="text" className="form-control" id="access-token"
                                       required={true}/>
                                <br/>
                                <label htmlFor="name" className={'leftLabel'}>Kod pocztowy</label>
                                <input type="text" className="form-control" id="access-token"
                                       required={true}/>
                                <br/>
                                <label htmlFor="name" className={'leftLabel'}>Miejscowość</label>
                                <input type="text" className="form-control" id="access-token"
                                       required={true}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-9 col-lg-8 col-md-7"/>
                        <div className="col-xl-3 col-lg-4 col-md-5 col-sm-12">
                            <button className={'floatLeft btn registerButton col-md-12'}
                                    style={{fontFamily: 'StandardLatoFont', fontWeight: 400}} color={'#e3ab40'}>
                                Zapisz
                            </button>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}