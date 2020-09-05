import Footer from "../../component/Footer";
import * as React from "react";
import LoggedHeader from "../../component/LoggedHeader";

export default class PlacesApiAndWidget extends React.Component {
    state = {
        apiToken: ''
    }

    componentDidMount() {
        if (!localStorage.getItem('token')) {
            window.location.href = '/places';
        }

        this.setState({apiToken: this.props.customerConfigProvider.getCustomerApiToken()})

        this.setState({
            widget: '<script>' +
                '        let xmlHttp = new XMLHttpRequest(),' +
                '            url = ' + this.props.customerConfigProvider.getCustomerApiUrl() + ';' +
                '        xmlHttp.open("GET", url, true);' +
                '        xmlHttp.setRequestHeader("Authorization", "Bearer ' + this.props.customerConfigProvider.getCustomerApiToken() +
                '        xmlHttp.send(null);' +
                '        xmlHttp.onreadystatechange = function () {' +
                '            if (xmlHttp.readyState !== 4) {' +
                '                return;' +
                '            }' +
                '            let js = xmlHttp.response,' +
                '                oScript = document.createElement("script"),' +
                '                oScriptText = document.createTextNode(js);' +
                '            oScript.appendChild(oScriptText);' +
                '            document.body.appendChild(oScript);' +
                '        }' +
                '    </script>' +
                '<script>let id = \'widget-places-app\',' +
                '            token = ' + this.props.customerConfigProvider.getCustomerWidgetToken() + ';' +
                '        (function (id, token, callback) {' +
                '            let widget = setInterval(function () {' +
                '                // eslint-disable-next-line no-undef' +
                '                let instance = typeof PlacesWidget !== \'undefined\' ? PlacesWidget.default : null;' +
                '                if(!instance){' +
                '                    return;' +
                '                }' +
                '                (instance.new({id: id, token: token, callback: callback})).render();' +
                '                clearInterval(widget);' +
                '            }, 0);' +
                '        })(id, token, function (callbackParams) {' +
                '            console.log(callbackParams);' +
                '        });</script>'
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
                                    <textarea className="form-control" id="access-token" value={this.state.apiToken}
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