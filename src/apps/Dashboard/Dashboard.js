import React from 'react';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import { makeStyles } from '@material-ui/core/styles';
import DashboardCard from './DashboardCard/DashboardCard';
import Grid from '@material-ui/core/Grid/Grid';

const styles = makeStyles(theme => ({
    root: {
        display: 'flex',
        overflowX: "hidden"
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        justifyContent: "center",
        marginTop: "100px",
        textAlign: "center"
    }
}));

const dashboard = () => {

    const classes = styles();

    return(

        <div className={classes.root}>
            <Header/>
            <Sidebar/>
            <Grid className={classes.content} container spacing={3}>
                <DashboardCard title="Present workers" value={40} queryString="query=present"/>
                <DashboardCard title="Paid workers" value={40} queryString="query=present"/>
                <DashboardCard title="Total workers" value={40} queryString="query=present"/>
                <DashboardCard title="Total supervisors" value={40} queryString="query=present"/>
            </Grid>

        </div>
    )
};

export default dashboard;