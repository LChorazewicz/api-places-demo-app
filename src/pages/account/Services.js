import * as React from "react";
import {Link} from "react-router-dom";
import LoggedHeader from "../../component/LoggedHeader";
import Footer from "../../component/Footer";

export default class Services extends React.Component {

    state = {
        selectedServices: []
    };

    componentDidMount() {
        if (!localStorage.getItem('token')) {
            window.location.href = '/places';
        }
    }

    handleInit() {
        return [
            {
                id: 8,
                internalId: 876234,
                paymentDate: '2020-03-01',
                period_start: '2020-03-02',
                period_end: '2020-03-02',
                serviceName: 'Użycia API',
                quantity: 2000,
                price: 2000,
                paid: 2000
            },
            {
                id: 9,
                internalId: 876236,
                paymentDate: '2020-03-01',
                period_start: '2020-03-02',
                period_end: '2020-03-02',
                serviceName: 'Użycia Widget-a',
                quantity: 200,
                price: 2000,
                paid: 2000
            },
            {
                id: 11,
                internalId: 876288,
                paymentDate: null,
                period_start: '2020-03-02',
                period_end: '2020-03-02',
                serviceName: 'Abonament Czerwiec 2020',
                quantity: 1,
                price: 2000,
                paid: 1999
            },
            {
                id: 12,
                internalId: 876266,
                paymentDate: null,
                period_start: '2020-03-02',
                period_end: '2020-03-02',
                serviceName: 'Użycia Widget-a',
                quantity: 200,
                price: 2000,
                paid: 0
            },
        ];
    }

    handleSelect(internalId) {
        this.setState({
            selectedServices:
                this.state.selectedServices.includes(internalId) ?
                    this.state.selectedServices.filter(i => i !== internalId) :
                    [...this.state.selectedServices, internalId]
        });
    }

    render() {
        let $this = this;

        return <div>
            <LoggedHeader/>
            <div className={'container h-100'} style={{minHeight: '100vh'}}>
                <div>
                    <h3>
                        Wybierz usługi do opłacenia w obecnym okresie rozliczeniowym
                    </h3>
                    <Link to={'#'}
                          className={'btn registerButton col-md-4 col-lg-3 col-xl-2'}
                          style={{fontFamily: 'StandardLatoFont', fontWeight: 400, float: 'right'}}>Dodatkowy
                        pakiet</Link>
                    <br/>
                    <br/>
                    <table className="table table-striped table-bordered col-md-12">
                        <thead className={'thead-dark'}>
                        <tr>
                            <th scope="col">lp</th>
                            <th scope="col">Usługa</th>
                            <th scope="col">Ilość</th>
                            <th scope="col">Okres</th>
                            <th scope="col">Należność</th>
                            <th scope="col">Opłacono</th>
                            <th scope="col">Akcja</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.handleInit().map(function (item) {
                            const needPay = item.price !== item.paid;
                            return (
                                <tr className={needPay ? 'table-danger' : ''}>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.serviceName}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.period_start} - {item.period_end}</td>
                                    <td>{item.price}</td>
                                    <td>{item.paid}</td>
                                    <td>
                                        {needPay ? <div className="form-check">
                                            <input type="checkbox" className="form-check-input"
                                                   onChange={() => $this.handleSelect(item.internalId)}/>
                                        </div> : ''}
                                    </td>
                                </tr>
                            );
                        })}

                        <tr className={'table-success'}>
                            <td colSpan={5} style={{textAlign: 'right', fontWeight: 900}}>Suma</td>
                            <td colSpan={2} style={{fontWeight: 900}}>250zł</td>
                        </tr>

                        </tbody>
                    </table>

                    {
                        this.state.selectedServices.length > 0 ?
                            <Link
                                to={'/places/account/payments/methods/' + $this.state.selectedServices}
                                className={'btn registerButton col-md-4 col-lg-3 col-xl-2'}
                                style={{fontFamily: 'StandardLatoFont', fontWeight: 400, float: 'right'}}>Wybór
                                płatności</Link> : ''
                    }

                </div>
            </div>
            <Footer/>
        </div>;
    }
}