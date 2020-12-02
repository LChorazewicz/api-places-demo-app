import Footer from "../../component/layout/Footer";
import * as React from "react";
import LoggedHeader from "../../component/layout/LoggedHeader";
import Button from "@material-ui/core/Button";

export default class Settings extends React.Component {
    state = {
        settings: {
            customer: {},
            contact: {}
        }
    }
    componentDidMount() {
        this.loadData();
    }

    loadData(onSuccess) {
        this.setState({settings: {
            contact: {
                email: 'test@softwareservice.pl',
                phone: '513210196',
            },
            customer: {
                name: 'Software Service - Leszek Chorążewicz',
                taxNumber: '2398472932',
                streetName: 'Sucharskiego',
                buildingNumber: '3',
                localNumber: '2',
                city: 'Ostrołeka',
                postalCode: '07-410',
            }
        }})
    }

    updateData() {
        let http = this.props.httpService;

        this.props.notificator.notifySuccess('Aktualizje dane...');

        http.post(`/invoice-data/`)
            .then(res => {
                this.loadData(() => this.props.notificator.notifySuccess('Zaktualizowano'))
            }).catch(exception => {
                this.props.notificator.notifySuccess('Błąd podczas aktualizacji danych');
            }
        );
    }

    render() {
        const isNumberAvailable = this.state.settings.contact.phone;

        return (
            <div>
                <LoggedHeader/>
                <div className={'container h-100'} style={{minHeight: '100vh'}}>
                    <h3 className={'text-left'}>Dane do odbioru faktury</h3>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="email" className={'leftLabel'}>Email</label>
                                <input type="text" className="form-control" id="email" readOnly={true}
                                       value={this.state.settings.contact.email}/>
                               <br/>
                                {
                                    isNumberAvailable ? (
                                        <div>
                                            <label htmlFor="phone" className={'leftLabel'}>Numer kontaktowy</label>
                                            <input type="text" className="form-control" id="phone" readOnly={true}
                                                   value={this.state.settings.contact.phone}/>
                                        </div>
                                    ) : (
                                        <div />
                                    )

                                }

                            </div>
                        </div>
                    </div>
                    <br/>
                    <h3 className={'text-left'}>Dane do faktury</h3>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="name" className={'leftLabel'}>Nabywca</label>
                                <input type="text" className="form-control" id="access-token"
                                       required={true} value={this.state.settings.customer.name}/>
                                <br/>
                                <label htmlFor="name" className={'leftLabel'}>NIP (jeśli faktura jest wystawiana na
                                    firmę)</label>
                                <input type="text" className="form-control" id="access-token"
                                       required={true} value={this.state.settings.customer.taxNumber}/>
                                <br/>
                                <label htmlFor="name" className={'leftLabel'}>Ulica i numer lokalu</label>
                                <input type="text" className="form-control" id="access-token"
                                       required={true} value={
                                           this.state.settings.customer.streetName + ' ' +
                                           this.state.settings.customer.buildingNumber +
                                           (this.state.settings.customer.localNumber ? ' / ' : '') +
                                           this.state.settings.customer.localNumber
                                       }/>
                                <br/>
                                <label htmlFor="name" className={'leftLabel'}>Kod pocztowy</label>
                                <input type="text" className="form-control" id="access-token"
                                       required={true}
                                       value={this.state.settings.customer.postalCode}
                                />
                                <br/>
                                <label htmlFor="name" className={'leftLabel'}>Miejscowość</label>
                                <input type="text" className="form-control" id="access-token"
                                       required={true} value={this.state.settings.customer.city}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-9 col-lg-8 col-md-7"/>
                        <div className="col-xl-3 col-lg-4 col-md-5 col-sm-12">
                            <Button variant="outlined" onClick={() => this.updateData()}
                                    className={'button float-right'}>
                                Zapisz
                            </Button>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}