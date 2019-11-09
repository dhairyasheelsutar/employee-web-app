import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './Header.css';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1
    }
}));

const header = () => {

    const classes = styles();

    return(
        <div className="Header">
            <AppBar className={classes.appBar} position="fixed">
                <Toolbar >
                    <Typography variant="h6" className="Header">
                        Employee App
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default header;