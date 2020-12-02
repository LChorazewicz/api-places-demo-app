export default class AccountingPeriod {
    constructor(
        period,
        limits,
        usage
    ) {
        this.period = period;
        this.limits = limits;
        this.usage = usage;
    }

    getName(){
        return this.period.name;
    }

    getApiUsageInPercents(){
        return ((this.usage.api / this.limits.api) * 100).toFixed(2);
    }

    getWidgetUsageInPercents(){
        return ((this.usage.widget / this.limits.widget) * 100).toFixed(2);
    }

    getApiUsage(){
        return this.usage.api;
    }

    getWidgetUsage(){
        return this.usage.widget;
    }

    getApiLimit(){
        return this.limits.api;
    }

    getWidgetLimit(){
        return this.limits.widget;
    }
}