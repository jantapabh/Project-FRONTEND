import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import logo from '../static/images/logo.png'
import content from '../static/images/content.png'
import Sidebar from '../components/Sidebar'
import Main from './Main'

// Show หน้านี้ทุกครั้งเมื่อผู้ฝช้เข้ามาและสามารถดูข้อมูลได้คราวๆ เกี่ยวกับผู้สูงอายุ
//หน้านี้มี SIdebar + รูปและก็ Main โดยหน้านี้จะแสเงสำหรับผู้ใช้ทั่วไป
//หน้านี้คือหน้าแรกที่ผู้ใช้เข้ามา

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    }
}));


export default function Pricing() {

    const classes = useStyles();

    return (
        <div>
            <div>
                <Sidebar />
                <Container>
                    <React.Fragment >
                        <Grid container component="main" className={classes.root} align="center">
                            <Typography component="h1" variant="h4" maxWidth="lg" align="center" color="textPrimary" gutterBottom>
                                <img src={logo} style={{ margin: 50 }} />
                            </Typography>
                            <Typography component="h1" variant="h4" maxWidth="lg" align="center" color="textPrimary" gutterBottom>
                                <img src={content} style={{ margin: 50 }} />
                            </Typography>
                        </Grid>
                    </React.Fragment>
                </Container>
            </div>
            <Main />
        </div>
    );
}