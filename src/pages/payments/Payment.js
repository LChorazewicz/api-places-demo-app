import Footer from "../../component/layout/Footer";
import * as React from "react";
import LoggedHeader from "../../component/layout/LoggedHeader";
import Button from "@material-ui/core/Button";
import AccountingPeriod from "./AccountingPeriod";
import TabPaymentsPanel from "./TabPaymentsPanel";

export default class Payment extends React.Component {
    state = {
        selectedServices: [],
        services: [],
    };

    componentDidMount() {
        this.handleInit();
    }

    handleInit() {
        this.setState({
            services: [
                {
                    id: 1,
                    internalId: 876234,
                    paymentDate: '2020-10-05',
                    period_start: '2020-10-01',
                    period_end: '2020-10-31',
                    serviceName: 'Abonament na platformie PlacesApi',
                    price: 2000,
                },
                {
                    id: 2,
                    internalId: 876236,
                    paymentDate: '2020-11-05',
                    period_start: '2020-11-01',
                    period_end: '2020-11-31',
                    serviceName: 'Abonament na platformie PlacesApi',
                    price: 2000,
                },
                {
                    id: 3,
                    internalId: 876288,
                    paymentDate: null,
                    period_start: '2020-10-01',
                    period_end: '2020-10-31',
                    serviceName: 'Pakiet dodatkowych - 2000 użyć',
                    price: 2000,
                },
                {
                    id: 4,
                    internalId: 876266,
                    paymentDate: null,
                    period_start: '2020-11-01',
                    period_end: '2020-11-31',
                    serviceName: 'Pakiet dodatkowych - 2000 użyć',
                    price: 2000,
                },
            ]
        });
    }

    handleSelect(item) {
        const internalId = item.internalId;
        let modified = false;

        if (this.state.selectedServices.length === 0) {
            this.setState({
                selectedServices: [...this.state.selectedServices, item],
            });

            return;
        }

        this.state.selectedServices.map((service) => {
            if (service.internalId === internalId) {
                this.setState({
                    selectedServices: this.state.selectedServices.filter(service => service.internalId !== internalId),
                });
                modified = true;
            }
        })

        if (!modified) {
            this.setState({
                selectedServices: [...this.state.selectedServices, item],
            });
        }
    }

    getTotalPrice() {
        let price = 0;
        this.state.selectedServices.map((service) => {
            price += service.price;
        })
        return price;
    }

    getSelectedPaymentInternalIds() {
        return this.state.selectedServices.map(function (item) {
            return item.internalId;
        })
    }

    render() {
        let $this = this;

        const isSomethingToPay = this.state.services.length > 0,
            table = <table className="table table-striped table-bordered col-md-12">
                <thead className={'thead-dark'}>
                <tr>
                    <th scope="col">lp</th>
                    <th scope="col">Usługa</th>
                    <th scope="col">Okres</th>
                    <th scope="col">Należność</th>
                    <th scope="col" style={{width: 150}}>Akcja</th>
                </tr>
                </thead>
                <tbody>
                {this.state.services.map(function (item) {
                    const datePastDue = false;
                    return (
                        <tr className={datePastDue ? 'table-danger' : ''} key={item.id}>
                            <th scope="row">{item.id}</th>
                            <td>{item.serviceName}</td>
                            <td>{item.period_start} - {item.period_end}</td>
                            <td>{(item.price).toFixed(2)} zł</td>
                            <td>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input"
                                           onChange={() => ($this.handleSelect(item))}/>
                                </div>
                            </td>
                        </tr>
                    );
                })}

                <tr className={'table-success'}>
                    <td colSpan={4} style={{textAlign: 'right', fontWeight: 900}}>Suma</td>
                    <td colSpan={2} style={{fontWeight: 900}}>{this.getTotalPrice()} zł</td>
                </tr>
                </tbody>
            </table>;
        let accountingPeriods = [
            new AccountingPeriod({
                start: new Date('now'),
                end: new Date('now'),
                name: 'Październik 2020'
            }),
            new AccountingPeriod({
                start: new Date('now'),
                end: new Date('now'),
                name: 'Listopad 2020'
            })
        ];

        return <div>
            <LoggedHeader/>
            <div className={'container h-100'} style={{minHeight: '100vh'}}>
                <div>
                    <h3 style={{textAlign: 'left', float: 'left'}}>
                        {isSomethingToPay ? 'Usługi do opłacenia' : 'Nie masz nic do opłacenia'}
                    </h3>

                    {isSomethingToPay ? table : ''}
                    <Button variant="outlined" className={'button float-right'}
                            href={'/places/platform/payments/methods/' + $this.getSelectedPaymentInternalIds()}
                            disabled={this.state.selectedServices.length === 0}>
                        Wybór płatności
                    </Button>
                    <br/>
                    <br/>
                    <h3 style={{textAlign: 'left'}}>
                        Opłacone usługi
                    </h3>
                </div>
                <TabPaymentsPanel
                    accountingPeriods={accountingPeriods}
                    services={this.state.services}
                />
            </div>
            <Footer/>
        </div>;
    }
}