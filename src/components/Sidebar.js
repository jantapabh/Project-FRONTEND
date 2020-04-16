import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';





const useStyles = makeStyles((theme) => ({
    toolbar: {
        borderBottom: `0px solid ${theme.palette.divider}`,
        color: 'black',
        backgroundColor: 'white'
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
                <Typography
                    component="h2"
                    variant="h4"
                    color="white"
                    align="center"
                    noWrap
                    className={classes.toolbarTitle}
                >
        </Typography>
                <Button variant="outlined" size="lagre" style={{ width: 150, height: 50,  margin: 5, padding: 5}}>
                    LOG IN
        </Button>
            </Toolbar>
        </React.Fragment>
    );
}

Sidebar.propTypes = {
    sections: PropTypes.array,
    title: PropTypes.string,
};