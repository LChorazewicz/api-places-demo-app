import Footer from "../../component/layout/Footer";
import * as React from "react";
import LoggedHeader from "../../component/layout/LoggedHeader";
import ShowTokenDialog from "../../component/dialogs/access/ShowTokenDialog";
import ShowScriptDialog from "../../component/dialogs/access/ShowScriptDialog";
import SettingsDialog from "../../component/dialogs/access/SettingsDialog";
import ToggleTokenDialog from "../../component/dialogs/access/ToggleTokenDialog";
import RemoveTokenDialog from "../../component/dialogs/access/RemoveTokenDialog";
import CopyToClipboardFunction from "../../component/dialogs/access/CopyToClipboardFunction";
import Button from "@material-ui/core/Button";

export default class AccessToken extends React.Component {

    state = {
        tokens: {api: [], widget: []},
        api_url: ''
    }

    loadTokens(onSuccess) {
        this.setState({
            api_url: this.props.customerConfigProvider.getWidgetScriptUrl(),
            tokens: {
                api: [
                    {
                        id: 1,
                        generated_at: '2020-01-01 20:20',
                        expire_at: '2020-01-01 20:20',
                        status: false,
                        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9eyJpYXQiOjE2MDQ2MDczODksImV4cCI6MTYwNDYxMDk4OSwibG9naW4' +
                            'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDQ2MDczODksImV4cCI6MTYwNDYxMDk4OSwibG9naW4' +
                            'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDQ2MDczODksImV4cCI6MTYwNDYxMDk4OSwibG9naW4' +
                            'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDQ2MDczODksImV4cCI6MTYwNDYxMDk4OSwibG9naW4' +
                            'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDQ2MDczODksImV4cCI6MTYwNDYxMDk4OSwibG9naW4' +
                            'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDQ2MDczODksImV4cCI6MTYwNDYxMDk4OSwibG9naW4' +
                            'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDQ2MDczODksImV4cCI6MTYwNDYxMDk4OSwibG9naW4' +
                            'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDQ2MDczODksImV4cCI6MTYwNDYxMDk4OSwibG9naW4' +
                            'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDQ2MDczODksImV4cCI6MTYwNDYxMDk4OSwibG9naW4'
                    }, {
                        id: 2,
                        generated_at: '2020-01-01 20:20',
                        expire_at: '2020-01-01 20:20',
                        status: true,
                        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDQ2MDczODksImV4cCI6MTYwNDYxMDk4OSwibG9naW4' +
                            'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDQ2MDczODksImV4cCI6MTYwNDYxMDk4OSwibG9naW4' +
                            'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDQ2MDczODksImV4cCI6MTYwNDYxMDk4OSwibG9naW4' +
                            'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDQ2MDczODksImV4cCI6MTYwNDYxMDk4OSwibG9naW4' +
                            'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDQ2MDczODksImV4cCI6MTYwNDYxMDk4OSwibG9naW4' +
                            'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDQ2MDczODksImV4cCI6MTYwNDYxMDk4OSwibG9naW4' +
                            'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDQ2MDczODksImV4cCI6MTYwNDYxMDk4OSwibG9naW4' +
                            'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDQ2MDczODksImV4cCI6MTYwNDYxMDk4OSwibG9naW4' +
                            'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDQ2MDczODksImV4cCI6MTYwNDYxMDk4OSwibG9naW4' +
                            'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDQ2MDczODksImV4cCI6MTYwNDYxMDk4OSwibG9naW4',
                        settings: {}
                    }, {
                        id: 3,
                        generated_at: '2020-01-01 20:20',
                        expire_at: '2020-01-01 20:20',
                        status: false,
                        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDQ2MDczODksImV4cCI6MTYwNDYxMDk4OSwibG9naW4' +
                            'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDQ2MDczODksImV4cCI6MTYwNDYxMDk4OSwibG9naW4' +
                            'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDQ2MDczODksImV4cCI6MTYwNDYxMDk4OSwibG9naW4' +
                            'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDQ2MDczODksImV4cCI6MTYwNDYxMDk4OSwibG9naW4' +
                            'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDQ2MDczODksImV4cCI6MTYwNDYxMDk4OSwibG9naW4' +
                            'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDQ2MDczODksImV4cCI6MTYwNDYxMDk4OSwibG9naW4' +
                            'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDQ2MDczODksImV4cCI6MTYwNDYxMDk4OSwibG9naW4' +
                            'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDQ2MDczODksImV4cCI6MTYwNDYxMDk4OSwibG9naW4',
                        settings: {}
                    }
                ],
                widget: [
                    {
                        id: 1,
                        generated_at: '2020-01-01 20:20',
                        expire_at: '2020-01-01 20:20',
                        status: false,
                        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDQ2MDczODksImV4cCI6MTYwNDYxMDk4OSwibG9naW4' +
                            'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDQ2MDczODksImV4cCI6MTYwNDYxMDk4OSwibG9naW4' +
                            'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDQ2MDczODksImV4cCI6MTYwNDYxMDk4OSwibG9naW4' +
                            'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDQ2MDczODksImV4cCI6MTYwNDYxMDk4OSwibG9naW4' +
                            'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDQ2MDczODksImV4cCI6MTYwNDYxMDk4OSwibG9naW4' +
                            'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDQ2MDczODksImV4cCI6MTYwNDYxMDk4OSwibG9naW4' +
                            'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDQ2MDczODksImV4cCI6MTYwNDYxMDk4OSwibG9naW4',
                        settings: {
                            ip: '127.0.1.1',
                            domain: 'https://localhost'
                        }
                    }, {
                        id: 2,
                        generated_at: '2020-01-01 20:20',
                        expire_at: '2020-01-01 20:20',
                        status: true,
                        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDQ2MDczODksImV4cCI6MTYwNDYxMDk4OSwibG9naW4' +
                            'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDQ2MDczODksImV4cCI6MTYwNDYxMDk4OSwibG9naW4' +
                            'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDQ2MDczODksImV4cCI6MTYwNDYxMDk4OSwibG9naW4' +
                            'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDQ2MDczODksImV4cCI6MTYwNDYxMDk4OSwibG9naW4' +
                            'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDQ2MDczODksImV4cCI6MTYwNDYxMDk4OSwibG9naW4' +
                            'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDQ2MDczODksImV4cCI6MTYwNDYxMDk4OSwibG9naW4' +
                            'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDQ2MDczODksImV4cCI6MTYwNDYxMDk4OSwibG9naW4',
                        settings: {
                            ip: '127.0.0.1',
                            domain: 'http://localhost'
                        }
                    }
                ]
            }
        });

        if (typeof onSuccess === 'function') {
            onSuccess();
        }
    }

    componentDidMount() {
        if (!localStorage.getItem('token')) {
            window.location.href = '/places';
        }

        this.loadTokens();
    }

    updateToken(tokenId) {
        const itemIndex = this.state.tokens.api.findIndex(x => x.id === tokenId)

        let message = this.state.tokens.api[itemIndex].status ? 'Wyłączono token' : 'Włączono token';

        let http = this.props.httpService;

        this.props.notificator.notifySuccess('Wyłączam token...');

        http.put(`/tokens/` + tokenId)
            .then(res => {
                this.loadTokens(() => this.props.notificator.notifySuccess(message))
            }).catch(exception => {
                this.props.notificator.notifySuccess('Błąd podczas zmiany stanu tokenu');
            }
        );
    }

    removeToken(tokenId) {
        let http = this.props.httpService;

        this.props.notificator.notifySuccess('Usuwam token...');

        http.delete(`/tokens/` + tokenId)
            .then(res => {
                this.loadTokens(() => this.props.notificator.notifySuccess('Usunięto token'))
            }).catch(exception => {
                this.props.notificator.notifySuccess('Błąd podczas zmiany stanu tokenu');
            }
        );
    }

    createToken(type) {
        let http = this.props.httpService;

        this.props.notificator.notifySuccess('Dodaje token...');

        http.post(`/tokens`, JSON.stringify({
            type: type,
        }))
            .then(res => {
                this.loadTokens(() => this.props.notificator.notifySuccess('Dodano token'))
            }).catch(exception => {
            this.props.notificator.notifySuccess('Błąd podczas dodawania tokenu');
        });
    }


    saveWidgetTokenSettings(id, domain, ip) {
        let http = this.props.httpService;

        this.props.notificator.notifySuccess('Aktualizuje token...');

        http.patch(`/tokens/` + id, JSON.stringify({
            domain: domain,
            ip: ip,
        }))
            .then(res => {
                this.loadTokens(() => this.props.notificator.notifySuccess('Zaktuwalizowano reguły'))
            }).catch(exception => {
            this.props.notificator.notifySuccess('Błąd podczas aktualizzowania reguł');
        });
    }

    render() {
        const notificator = this.props.notificator;
        const $this = this;
        return (
            <div>
                <LoggedHeader/>
                <div className={'container h-100'} style={{minHeight: '100vh'}}>
                    <h3 style={{textAlign: 'left'}}>
                        Token pozwoli Ci korzystać z platformy w sposób łatwy i bezpieczny
                    </h3><br/>
                    <div className="col-md-12">
                        {/*<div className="form-group">*/}
                        <h4 className={'text-left'}>Tokeny API</h4>
                        {/*</div>*/}
                        <div style={{border: '1px solid rgb(221, 221, 221)', borderRadius: '4px', marginBottom: '10px'}}
                             className={'pt-1'}>
                            <table className="table" style={{margin: 0}}>
                                <thead>
                                <tr>
                                    <th style={{border: 'none'}} scope="col">lp</th>
                                    <th style={{border: 'none'}} scope="col">Wygenerowano</th>
                                    <th style={{border: 'none'}} scope="col">Ważności</th>
                                    <th style={{border: 'none'}} scope="col">Opcje</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.tokens.api.map(function (token, index) {
                                    return (
                                        <tr key={index}>
                                            <th style={{verticalAlign: 'inherit'}} scope="col">{token.id}</th>
                                            <td style={{verticalAlign: 'inherit'}}>{token.generated_at}</td>
                                            <td style={{verticalAlign: 'inherit'}}>{token.expire_at}</td>
                                            <td style={{verticalAlign: 'inherit'}}>
                                                <ShowTokenDialog token={token.token} notificator={notificator}/>
                                                <CopyToClipboardFunction content={token.token}
                                                                         notificator={notificator}/>
                                                <ToggleTokenDialog id={token.id}
                                                                   status={token.status}
                                                                   notificator={notificator}
                                                                   onToggle={() => $this.updateToken(token.id)}
                                                />
                                                <RemoveTokenDialog id={token.id}
                                                                   title={'Czy na pewno chcesz usunąć ten token?'}
                                                                   notificator={notificator}
                                                                   onRemove={() => $this.removeToken(token.id)}
                                                />
                                            </td>
                                        </tr>
                                    )
                                })}
                                </tbody>
                            </table>
                        </div>
                        <div className="flex-row">
                            <Button variant="outlined" onClick={() => this.createToken('api')}
                                    className={'button float-right'}>
                                Generuj nowy token
                            </Button>
                        </div>
                        <br/><br/>
                        <h4 className={'text-left'}>Tokeny Widget</h4>
                        <div
                            style={{border: '1px solid rgb(221, 221, 221)', borderRadius: '4px', marginBottom: '10px'}}>
                            <table className="table" style={{margin: 0}}>
                                <thead>
                                <tr>
                                    <th style={{border: 'none'}} scope="col">lp</th>
                                    <th style={{border: 'none'}} scope="col">Wygenerowano</th>
                                    <th style={{border: 'none'}} scope="col">Ważności</th>
                                    <th style={{border: 'none'}} scope="col">Opcje</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.tokens.widget.map(function (token, index) {
                                    return (
                                        <tr key={index}>
                                            <td style={{verticalAlign: 'inherit'}}>{token.id}</td>
                                            <td style={{verticalAlign: 'inherit'}}>{token.generated_at}</td>
                                            <td style={{verticalAlign: 'inherit'}}>{token.expire_at}</td>
                                            <td style={{verticalAlign: 'inherit'}}>
                                                <ShowTokenDialog token={token.token}
                                                                 title={'Widget Token'}
                                                                 notificator={notificator}
                                                />
                                                <ShowScriptDialog token={token.token}
                                                                  api_url={this.state.api_url}
                                                                  notificator={notificator}
                                                />
                                                <SettingsDialog id={token.id} ip={token.settings?.ip}
                                                                domain={token.settings?.domain}
                                                                onSave={(domain, ip) => $this.saveWidgetTokenSettings(token.id, domain, ip)}/>
                                                <ToggleTokenDialog id={token.id}
                                                                   title={'Czy na pewno chcesz wyłączyć ten token?'}
                                                                   onToggle={() => $this.updateToken(token.id)}
                                                />
                                                <RemoveTokenDialog id={token.id}
                                                                   title={'Czy na pewno chcesz usunąć ten token?'}
                                                                   onRemove={() => $this.removeToken(token.id)}
                                                />
                                            </td>
                                        </tr>
                                    )
                                }, this)}
                                </tbody>
                            </table>
                        </div>
                        <div className="row">
                            <div className="col-xl-9 col-lg-8 col-md-7"/>
                            <div className="col-xl-3 col-lg-4 col-md-5 col-sm-12">
                                <Button variant="outlined" onClick={() => this.createToken('widget')}
                                        className={'button float-right'}>
                                    Generuj nowy token
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}