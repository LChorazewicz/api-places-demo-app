export default class AccountingPeriod {
    constructor(
        period,
    ) {
        this.period = period;
    }

    getName() {
        return this.period.name;
    }
}