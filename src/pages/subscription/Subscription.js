import Footer from "../../component/layout/Footer";
import * as React from "react";
import LoggedHeader from "../../component/layout/LoggedHeader";
import Link from "@material-ui/core/Link";
import {Button} from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Switch from "@material-ui/core/Switch";
import RemoveTokenDialog from "../../component/dialogs/access/RemoveTokenDialog";
import ActivateSubscriptionDialog from "../../component/dialogs/access/ActivateSubscriptionDialog";
import {Redirect} from "react-router-dom";

export default class Subscription extends React.Component {
    state = {
        currentPlan: null,
        plans: [],
        monthlyCalculation: true,
        selectedPlan: null,
        net: true,
    }

    classes = {
        notActivatedPlan: 'plan card mb-5 mb-lg-0 plan-not-activated',
        disabledPlan: 'plan card mb-5 mb-lg-0 disabled-plan',
        activePlan: 'plan card mb-5 mb-lg-0 active-plan',
        netGross: 'btn-group'
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        this.setState({
            currentPlan: 2,
            selectedPlan: 2,
            plans: [
                {
                    id: 1,
                    name: 'Za zero',
                    properties: [
                        '15 zapytań do Api',
                        '15 użyć Widgeta',
                        'Dostęp z 1 adresu IP'
                    ],
                    limits: {
                        dailyUsage: true,
                        monthlyUsage: true,
                    },
                    pricing: {
                        monthly: 0,
                        yearly: 0
                    },
                    tax: 0.23
                },
                {
                    id: 2,
                    name: 'Indywidualny',
                    properties: [
                        '300 zapytań do Api',
                        '300 użyć Widgeta',
                        'Dostęp z 1 adresu IP',
                    ],
                    pricing: {
                        monthly: 39900,
                        yearly: 399900
                    },
                    tax: 0.23
                },
                {
                    id: 3,
                    name: 'Biznes',
                    properties: [
                        '800 zapytań do Api',
                        '800 użyć Widgeta',
                        'Dostęp z 2 adresów IP',
                        'Powiadomienia o wykorzystaniu',
                    ],
                    pricing: {
                        monthly: 59900,
                        yearly: 599900
                    },
                    tax: 0.23
                },
                {
                    id: 4,
                    name: 'Bez limitu',
                    properties: [
                        '3000+ zapytań do Api',
                        '3000+ użyć Widgeta',
                        'Dostęp z 10 adresów IP',
                        'Powiadomienia o wykorzystaniu',
                    ],
                    pricing: {
                        monthly: null,
                        yearly: null
                    },
                    tax: 0.23
                }
            ]
        });
    }

    activatePlan(planId) {
        let http = this.props.httpService;

        http.post(`/plan/activate/` + planId)
            .then(res => {
                this.props.notificator.notifySuccess('Plan aktywowany');
                window.location.href = '/places/platform/payments';
            }).catch(exception => {
                this.props.notificator.notifySuccess('Błąd połączenia z api, spróbuj za chwilę');
            }
        );
    }

    handleChangeCalculationType(type) {
        this.setState({monthlyCalculation: type === 'monthly'})
    }

    handleChangeNetGross() {
        this.setState({net: !this.state.net})
    }

    handleSelectPlan(id) {
        this.setState({selectedPlan: id})
    }

    calculateGross(price, tax) {
        return price + (tax * price);
    }

    render() {
        let monthly = this.state.monthlyCalculation,
            yearly = !monthly,
            net = this.state.net;
        return (
            <div>
                <LoggedHeader/>
                <div className={'container h-100'} style={{minHeight: '100vh'}}>
                    <h3 className={'text-left'}>Zwiększ możliwości swojego konta</h3>
                    <section className="pricing">
                        <div className="container">
                            <FormGroup style={{float: 'right'}}>
                                <FormControlLabel
                                    control={<Switch size="small" onChange={() => this.handleChangeNetGross()} color={'default'}/>}
                                    label="BRUTTO" className={'orange-text-color'}
                                />
                            </FormGroup>
                            <br/>
                            <br/>
                            <Button onClick={() => this.handleChangeCalculationType('monthly')}
                                    className={'orange-text-color'}>Miesięcznie</Button> / <Button
                            onClick={() => this.handleChangeCalculationType('yearly')}
                            className={'orange-text-color'}>Rocznie</Button><br/>

                            <div className="row d-flex justify-content-center">
                                {this.state.plans.map((plan, index) => {
                                    let currentPlan = this.state.currentPlan === plan.id,
                                        previousPlan = plan.id < this.state.currentPlan,
                                        selectedPlan = this.state.selectedPlan === plan.id,
                                        dailyUsage = plan.limits?.dailyUsage,
                                        monthlyUsage = plan.limits?.monthlyUsage,
                                        netMonthlyPrice = (plan.pricing.monthly / 100).toFixed(2),
                                        grossMonthlyPrice = this.calculateGross(plan.pricing.monthly / 100, plan.tax).toFixed(2),
                                        netYearlyPrice = (plan.pricing.yearly / 100).toFixed(2),
                                        grossYearlyPrice = this.calculateGross(plan.pricing.yearly / 100, plan.tax).toFixed(2),
                                        isMonthlyPrice = plan.pricing.monthly !== null,
                                        isYearlyPrice = plan.pricing.yearly !== null;

                                    return <div
                                        className={previousPlan ? this.classes.disabledPlan : (selectedPlan ? this.classes.activePlan : this.classes.notActivatedPlan)}
                                        key={index} onClick={() => this.handleSelectPlan(plan.id)}>
                                        <div className="card-body">
                                            <h5 className="card-title text-muted text-uppercase text-center">{plan.name}</h5>
                                            <h6 className="card-price text-center">
                                                {monthly ? (isMonthlyPrice ? (net ? netMonthlyPrice : grossMonthlyPrice) + ' zł/miesiąc' : 'Do negocjacji') : ''}
                                                {yearly ? (isYearlyPrice ? (net ? netYearlyPrice : grossYearlyPrice) + ' zł/rok' : 'Do negocjacji') : ''}
                                            </h6>
                                            {currentPlan ? <small>Twój aktualny plan<br/></small> : ''}
                                            <small>
                                                {monthly ? (dailyUsage ? 'Limit dzienny' : 'Bez limitu dziennego') : ''}
                                                {yearly ? (monthlyUsage ? 'Limit miesięczny' : 'Bez limitu miesięcznego') : ''}
                                            </small>
                                            <hr/>
                                            {plan.properties.map((item, idx) => {
                                                return <span className={'property'} key={idx}>{item}</span>
                                            })}
                                            {currentPlan || previousPlan ? '' :
                                                <ActivateSubscriptionDialog
                                                    title={'Czy na pewno chcesz aktywować subskrypcję?'}
                                                    onSubmit={() => this.activatePlan(plan.id)}
                                                />
                                            }
                                        </div>
                                    </div>
                                })}
                            </div>
                        </div>
                    </section>
                </div>
                <Footer/>
            </div>
        );
    }
}