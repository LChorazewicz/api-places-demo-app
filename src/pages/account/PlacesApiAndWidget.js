import Footer from "../../component/Footer";
import * as React from "react";
import LoggedHeader from "../../component/LoggedHeader";

export default class PlacesApiAndWidget extends React.Component {
    state = {
        token: ''
    }

    componentDidMount() {
        if (!localStorage.getItem('token')) {
            window.location.href = '/places';
        }

        const token = '' +
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1ODk5MTA3NjcsImV4cCI6MTYxMjgwNjc2NywiYWNjb3VudF91dWl' +
            'kIjoibGVzemVrLmNob3JhemV3aWN6QGdtYWlsLmNvbSJ9.b9t4IRrP_MDHTc18X-v7nwjbZLhotBeGbyrpAAHjcgYHjBiYEvLhJ0' +
            '6mIOcli761jYFb4nSAtqjlrbkmZ2A-dlPFbaD7Sdv0ul4RiSp1nEGoSps6fvthqscwoiPIbt7CG-RpPGFxsTccCtMkbqpWUeTQQ-' +
            'fmnNijWCxHLu7moe6924YVJr3VkAJ7eqrbgMPzkyGtv34vOpKTqGBWYdYsGdTTqKVr0lsub9KkDoT_Kpe_xdzKALEFMaljXii3aw' +
            '8xn0bj9basmuPerf--lFeHXkyvavRU_2OwiByAmRmkT4W8Q_l8lCVksvCfM40fMEgp1aekyy2KnuB35MXhWlCaOQ';

        this.setState({token: token})

        this.setState({
            widget: '<script type="text/javascript" src="https://api.softwareservice.pl/v1/rest/places/widget/code?t=' + token + '" />'
        })
    }

    render() {
        return (
            <div>
                <LoggedHeader/>
                <div className={'container h-100'} style={{minHeight: '100vh'}}>
                    <div style={{border: '1px solid rgb(221, 221, 221)', borderRadius: '4px'}} className={'p-4'}>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <h3 className={'text-left'}>Token API</h3>
                                    <label htmlFor="access-token" className={'leftLabel'}>Access token</label>
                                    <textarea className="form-control" id="access-token" value={this.state.token}
                                              required={true} readOnly={true} style={{height: '180px'}}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-9 col-lg-8 col-md-7"/>
                            <div className="col-xl-3 col-lg-4 col-md-5 col-sm-12">
                                <button className={'floatLeft btn registerButton col-md-12'}
                                        style={{fontFamily: 'StandardLatoFont', fontWeight: 400}} color={'#e3ab40'}>
                                    Generuj nowy access token
                                </button>
                            </div>
                        </div>

                        <br/><br/><br/>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <h3 className={'text-left'}>Reguły dostępu do tokenu / widgetu</h3>
                                    <label htmlFor="domains" className={'leftLabel'}>Domeny które korzystają z
                                        tokenu / widgetu oddzielone przecinkami, na przykład http://localhost.pl,
                                        https://localhost.com</label>
                                    <input className="form-control" id="domains"/>
                                    <br/>
                                    <label htmlFor="ips" className={'leftLabel'}>Adresy IP serwerów, które
                                        korzystają z tokenu / widgetu, na przykład 127.0.0.1, 192.168.1.1</label>
                                    <input className="form-control" id="ips"/>
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-8 col-md-7"/>
                            <div className="col-xl-3 col-lg-4 col-md-5 col-sm-12">
                                <button className={'floatLeft btn registerButton col-md-12'}
                                        style={{fontFamily: 'StandardLatoFont', fontWeight: 400}} color={'#e3ab40'}>
                                    Zapisz reguły API Tokenu
                                </button>
                            </div>
                        </div>
                    </div>

                    <br/><br/><br/>
                    <div style={{border: '1px solid rgb(221, 221, 221)', borderRadius: '4px'}} className={'p-4'}>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <h3 className={'text-left'}>Widget na stronę internetową</h3>
                                    <label htmlFor="widget" className={'leftLabel'}>Skrypt widgetu</label>
                                    <textarea className="form-control" id="widget" style={{height: '200px'}}
                                              required={true} readOnly={true} value={this.state.widget}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/><br/><br/>
                </div>
                <Footer/>
            </div>
        );
    }
}