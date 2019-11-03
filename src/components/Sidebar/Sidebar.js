import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import GroupIcon from '@material-ui/icons/Group';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import HelpIcon from '@material-ui/icons/Help';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const drawerWidth = 240;

const styles = makeStyles(theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
}));

const sidebar = (props) => {
    const classes = styles();

    return (
        <div>
            <CssBaseline />
            <Header/>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.toolbar} />
                <List>
                    <Link to="/dashboard">
                        <ListItem button>
                            <ListItemIcon><DashboardIcon/></ListItemIcon>
                            <ListItemText primary="Dashboard"/>
                        </ListItem>
                    </Link>
                    <Link to="/workers">
                        <ListItem button>
                            <ListItemIcon><GroupIcon/></ListItemIcon>
                            <ListItemText primary="Workers"/>
                        </ListItem>
                    </Link>
                    <Link to="/attendance">
                        <ListItem button>
                            <ListItemIcon><CollectionsBookmarkIcon/></ListItemIcon>
                            <ListItemText primary="Attendance"/>
                        </ListItem>
                    </Link>
                    <Divider/>
                    <Link to="/help">
                        <ListItem button>
                            <ListItemIcon><HelpIcon/></ListItemIcon>
                            <ListItemText primary="Help"/>
                        </ListItem>
                    </Link>
                    <Link to="/">
                        <ListItem button>
                            <ListItemIcon><ExitToAppIcon/></ListItemIcon>
                            <ListItemText primary="Logout"/>
                        </ListItem>
                    </Link>
                </List>
                <Divider />
            </Drawer>
        </div>
    );
};

export default sidebar;