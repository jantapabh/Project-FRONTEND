import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import logo from '../static/images/logo.png'
import content from '../static/images/content.png'

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
        </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    }
}));


export default function Pricing() {

    const classes = useStyles();

    return (
        <React.Fragment >
            <Grid container component="main" className={classes.root} align="center">
                <Typography component="h1" variant="h4" maxWidth="lg" align="center" color="textPrimary" gutterBottom>
                    <img src={logo} style={{ margin: 50 }} />
                </Typography>
                <Typography component="h1" variant="h4" maxWidth="lg" align="center" color="textPrimary" gutterBottom>
                   <img src={content} style={{ margin: 50 }}/>
                </Typography>
            </Grid>
        </React.Fragment>
    );
}