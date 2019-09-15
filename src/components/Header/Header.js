import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './Header.css';

const header = (props) => {
    return(
        <div className="Header">
            <AppBar position="static">
                <Toolbar >
                    <Typography variant="h6" className="Header">
                        Employee App
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default header;