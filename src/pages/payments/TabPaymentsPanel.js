import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import GetAppIcon from '@material-ui/icons/GetApp';

function TabPaymentsPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPaymentsPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

export default function ScrollableTabsButtonAuto(props) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const sum = 8000;

    const handleDownloadInvoice = () => (
        console.log('pobieram fakture')
    );

    const paidTable = (services) =>
        <table className="table table-striped table-bordered col-md-12">
        <thead className={'thead-dark'}>
        <tr>
            <th scope="col">lp</th>
            <th scope="col">Usługa</th>
            <th scope="col">Zapłacono</th>
            <th scope="col">Faktura</th>
        </tr>
        </thead>
        <tbody>
        {services.map(function (item) {
            const needPay = item.toPay > 0;
            return (
                <tr className={needPay ? 'table-danger' : ''} key={item.id}>
                    <th scope="row">{item.id}</th>
                    <td>{item.serviceName}</td>
                    <td>{(item.price).toFixed(2)} zł</td>
                    <td>
                        <button type="button" className="btn btn-sm" onClick={() => handleDownloadInvoice()}>
                            <GetAppIcon />
                            <br/>
                            <small>
                                Pobierz fakturę
                            </small>
                        </button>
                    </td>
                </tr>
            );
        })}

        <tr className={'table-secondary'}>
            <td colSpan={3} style={{textAlign: 'right', fontWeight: 900}}>Suma</td>
            <td colSpan={2} style={{fontWeight: 900}}>{sum} zł</td>
        </tr>
        </tbody>
    </table>;

    return (
        <div>
            <AppBar position="static" color="default" style={{boxShadow: 'none'}}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    {props.accountingPeriods.map((period, index) => {
                        return <Tab style={{outline: 'none'}} label={period.getName()}
                                    key={index} {...a11yProps(index)} />
                    })}
                </Tabs>
            </AppBar>
            {paidTable(props.services)}
        </div>
    );
}
