import Footer from "../../component/layout/Footer";
import * as React from "react";
import LoggedHeader from "../../component/layout/LoggedHeader";
import ScrollableTabsButtonAuto from "./TabPanel";
import AccountingPeriod from "./AccountingPeriod";

export default class Dashboard extends React.Component {
    handleInit() {
        const data = [
            {
                period: {
                    start: new Date('now'),
                    end: new Date('now'),
                    name: 'Sierpień 2020'
                },
                limits: {
                    widget: 2000,
                    api: 2000,
                },
                usage: {
                    widget: 2,
                    api: 1
                },
            },
            {
                period: {
                    start: new Date('now'),
                    end: new Date('now'),
                    name: 'Wrzesień 2020'
                },
                limits: {
                    widget: 1800,
                    api: 8000,
                },
                usage: {
                    widget: 2,
                    api: 1
                },
            },
            {
                period: {
                    start: new Date('now'),
                    end: new Date('now'),
                    name: 'Październik 2020'
                },
                limits: {
                    widget: 4000,
                    api: 10000,
                },
                usage: {
                    widget: 3,
                    api: 2
                },
            },
            {
                period: {
                    start: new Date('now'),
                    end: new Date('now'),
                    name: 'Listopad 2020'
                },
                limits: {
                    widget: 3000,
                    api: 10000,
                },
                usage: {
                    widget: 2,
                    api: 1
                },
            },
        ];


        return data;
    }

    render() {
        const info = this.handleInit();

        let accountPeriods = info.map((accountingPeriod) => {
            return new AccountingPeriod(accountingPeriod.period, accountingPeriod.limits, accountingPeriod.usage);
        });

        return (
            <div>
                <LoggedHeader/>
                <div className={'container h-100'} style={{minHeight: '100vh'}}>
                    <h3 style={{textAlign: 'left'}}>
                        Statystyki użycia platformy w podziale miesięcznym
                    </h3><br/>
                    <ScrollableTabsButtonAuto
                        accountingPeriods={accountPeriods}
                    />
                </div>
                <Footer/>
            </div>
        );
    }
}