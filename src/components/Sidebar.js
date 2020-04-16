
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
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
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
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
      },
      toolbar: {
        flexWrap: 'wrap',
      },
      toolbarTitle: {
        flexGrow: 1,
      },
      link: {
        margin: theme.spacing(1, 1.5),
      },
      heroContent: {
        padding: theme.spacing(8, 0, 6),
      },
      cardHeader: {
        backgroundColor:
          theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
      }
      
     
}));

export default function Sidebar(props) {
    const classes = useStyles();
    const { title } = props;

    return (
        <React.Fragment>
        <CssBaseline />
        <AppBar position="static" color="white" elevation={0} className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
              Company name
            </Typography>
            <nav>
              <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                Features
              </Link>
              <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                Enterprise
              </Link>
              <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                Support
              </Link>
            </nav>
            <Button href="#" color="primary" variant="outlined" className={classes.link}>
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
}

Sidebar.propTypes = {
    sections: PropTypes.array,
    title: PropTypes.string,
};