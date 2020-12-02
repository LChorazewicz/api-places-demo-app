import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from "react-router-dom";
import DashboardIcon from '@material-ui/icons/Dashboard';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import PaymentIcon from '@material-ui/icons/Payment';
import SettingsIcon from '@material-ui/icons/Settings';
import ExposurePlus1Icon from '@material-ui/icons/ExposurePlus1';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));

export default function LoggedHeader() {
    const classes = useStyles();

    return (
        <div className={'menu'}>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <div className={classes.toolbar} style={{marginLeft: '5px'}}>
                    <Link to={'/places/platform/dashboard'} className="navbar-brand">
                        <div className="image"/>
                    </Link>
                </div>
                <Divider/>
                <List>
                    <Link to={'/places/platform/dashboard'} style={{textDecoration: 'none'}}>
                        <ListItem button key={'Pulpit'}>
                            <ListItemIcon><DashboardIcon/></ListItemIcon>
                            <ListItemText primary={'Pulpit'} className={'black-text-color'}/>
                        </ListItem>
                    </Link>

                    <Link to={'/places/platform/access-token'} style={{textDecoration: 'none'}}>
                        <ListItem button key={'Tokeny'}>
                            <ListItemIcon><LockOpenIcon/></ListItemIcon>
                            <ListItemText primary={'Tokeny'} className={'black-text-color'} />
                        </ListItem>
                    </Link>

                    <Link to={'/places/platform/payments'} style={{textDecoration: 'none'}}>
                    <ListItem button key={'Płatności'}>
                        <ListItemIcon><PaymentIcon/></ListItemIcon>
                        <ListItemText primary={'Płatności'} className={'black-text-color'} />
                    </ListItem>
                    </Link>

                    <Link to={'/places/platform/subscription'} style={{textDecoration: 'none'}}>
                        <ListItem button key={'Subskrypcja'}>
                            <ListItemIcon><ExposurePlus1Icon/></ListItemIcon>
                            <ListItemText primary={'Subskrypcja'} className={'black-text-color'} />
                        </ListItem>
                    </Link>

                    <Link to={'/places/platform/settings'} style={{textDecoration: 'none'}}>
                        <ListItem button key={'Ustawienia'}>
                            <ListItemIcon><SettingsIcon/></ListItemIcon>
                            <ListItemText primary={'Ustawienia'} className={'black-text-color'} />
                        </ListItem>
                    </Link>
                </List>
                <Divider/>
                <List>
                    <Link to={'/places/platform/logout'} style={{textDecoration: 'none'}}>
                        <ListItem button key={'Wyloguj'}>
                            <ListItemIcon><ExitToAppIcon/></ListItemIcon>
                            <ListItemText primary={'Wyloguj'} className={'black-text-color'} />
                        </ListItem>
                    </Link>
                </List>
            </Drawer>
        </div>
    );
}