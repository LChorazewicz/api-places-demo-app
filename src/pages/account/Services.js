import * as React from "react";
import {Link} from "react-router-dom";
import LoggedHeader from "../../component/LoggedHeader";
import Footer from "../../component/Footer";

export default class Services extends React.Component {

    state = {
        selectedServices: [],
        services: [],
        toPay: 0,
    };

    componentDidMount() {
        if (!localStorage.getItem('token')) {
            window.location.href = '/places';
        }

        this.handleInit();
    }

    handleInit() {
        this.setState({services: [
            {
                id: 8,
                internalId: 876234,
                paymentDate: '2020-03-01',
                period_start: '2020-03-02',
                period_end: '2020-03-02',
                serviceName: 'Użycia API',
                quantity: 2000,
                price: 2000,
                paid: 2000,
                toPay: 0
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
                paid: 2000,
                toPay: 0
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
                paid: 1999,
                toPay: 1
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
                paid: 0,
                toPay: 2000
            },
        ]});
    }

    handleSelect(item) {
        const internalId = item.internalId;

        this.setState({
            selectedServices:
                this.state.selectedServices.includes(internalId) ?
                    this.state.selectedServices.filter(i => i !== internalId) :
                    [...this.state.selectedServices, internalId],
        });

        console.log(this.state.selectedServices);

        let sum = 0;
        let $this = this;
        this.state.services.forEach(function (item) {
            console.log(item)
            if($this.state.selectedServices.includes(item.internalId)){
                console.log('zawiera', item)
                sum += (item.toPay);
            }
        })
        this.setState({toPay: sum});
    }

    getSelectedPaymentInternalIds(){
        return this.state.selectedServices.map(function (item) {
            return item.internalId;
        })
    }

    render() {
        const isSomethingToPay = this.state.services.length > 0,
            table = <table className="table table-striped table-bordered col-md-12">
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
                {this.state.services.map(function (item) {
                    const needPay = item.toPay > 0;
                    return (
                        <tr className={needPay ? 'table-danger' : ''} key={item.id}>
                            <th scope="row">{item.id}</th>
                            <td>{item.serviceName}</td>
                            <td>{item.quantity}</td>
                            <td>{item.period_start} - {item.period_end}</td>
                            <td>{item.price}</td>
                            <td>{item.paid}</td>
                            <td>
                                {needPay ? <div className="form-check">
                                    <input type="checkbox" className="form-check-input"
                                           onChange={() => ($this.handleSelect(item))}/>
                                </div> : ''}
                            </td>
                        </tr>
                    );
                })}

                <tr className={'table-success'}>
                    <td colSpan={5} style={{textAlign: 'right', fontWeight: 900}}>Suma</td>
                    <td colSpan={2} style={{fontWeight: 900}}>{this.state.toPay} zł</td>
                </tr>

                </tbody>
            </table>;
        let $this = this;

        return <div>
            <LoggedHeader/>
            <div className={'container h-100'} style={{minHeight: '100vh'}}>
                <div>
                    <h3>
                        {
                            isSomethingToPay ?
                                'Wybierz usługi do opłacenia w obecnym okresie rozliczeniowym' :
                                'W obecnym okresie rozliczenionym nie masz nic do opłacenia'
                        }

                    </h3>
                    <Link to={'#'}
                          className={'btn registerButton col-md-4 col-lg-3 col-xl-2'}
                          style={{fontFamily: 'StandardLatoFont', fontWeight: 400, float: 'right'}}>Dodatkowy
                        pakiet</Link>
                    <br/>
                    <br/>

                    {
                        isSomethingToPay ? table : ''
                    }

                    {
                        this.state.selectedServices.length > 0 ?
                            <Link
                                to={'/places/account/payments/methods/' + $this.getSelectedPaymentInternalIds()}
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