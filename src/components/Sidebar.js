
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import logo from '../static/images/logo.png'

const useStyles = makeStyles((theme) => ({
    toolbar: {
        borderBottom: `0px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
    },
}));

export default function Sidebar(props) {

    const classes = useStyles();
    
    return (
        <React.Fragment>
            <Toolbar className={classes.toolbar}>
               <img src={logo} style={{ width: 100, height: 100, margin: 5, padding: 5}}/>
                <Typography
                    component="h1"
                    variant="h4"
                    color="inherit"
                    align="center"
                    noWrap
                    className={classes.toolbarTitle}
                >
                    ELDERY AI
                </Typography>
                <Button variant="outlined" size="large" style={{ margin: 5 }}>
                    LOG IN
        </Button>
                <Button variant="outlined" size="large" style={{ margin: 5 }}>
                    REGISTER
        </Button>
            </Toolbar>
            <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                <Link
                    color="inherit"
                    noWrap
                    variant="body2"
                    className={classes.toolbarLink}
                >
                </Link>
            </Toolbar>
        </React.Fragment>
    );
}

Sidebar.propTypes = {
    sections: PropTypes.array,
    title: PropTypes.string,
};