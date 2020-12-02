import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CardBox from "./CardBox";

function TabPanel(props) {
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
                    <Typography component={'span'}>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
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
            {props.accountingPeriods.map((period, index) => {
                return <TabPanel value={value} index={index} key={index}
                                 style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
                    <div className={'row col-md-12'}>
                        <div className="col-md-5">
                            <CardBox
                                title={'Wykorzystanie zasobów Places API'}
                                percentage={period.getApiUsageInPercents()}
                                usage={period.getApiUsage()}
                                limit={period.getApiLimit()}
                            />
                        </div>
                        <div className="col-md-2"/>
                        <div className="col-md-5">
                            <CardBox
                                title={'Wykorzystanie zasobów Places Widget'}
                                percentage={period.getWidgetUsageInPercents()}
                                usage={period.getWidgetUsage()}
                                limit={period.getWidgetLimit()}
                            />
                        </div>

                    </div>
                </TabPanel>
            })}
        </div>
    );
}
