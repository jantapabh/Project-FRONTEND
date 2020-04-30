import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Card } from 'react-bootstrap';
import { MDBRow, MDBCol, MDBIcon, MDBCardBody } from "mdbreact";
import { Player } from 'video-react';
import show from '../static/images/show.gif'
import ChartOne from '../components/charts/ChartOne'
import ChartTwo from '../components/charts/ChartTwo'
import Footer from '../components/Footer'
import footer3 from '../static/images/footer3.png'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';



//ส่วนหน้าหลักในการแสดงข้อมูลของผู็สูงอายุสำหรับผู้ใช้ทั่วไป
//ข้อมูลที่ควรมี



const Main = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
            height: '100vh',
        }
    }));

    const classes = useStyles();

    return (
        <div>
            <MDBCardBody>
                <MDBRow>
                <MDBCol lg="4">
                <React.Fragment >
                        <Grid container component="main" className={classes.root} align="center">
                            <Typography component="h1" variant="h4" maxWidth="lg" align="center" color="textPrimary" gutterBottom>
                               
                            </Typography>
                        </Grid>
                    </React.Fragment>
                </MDBCol>
                </MDBRow>
            </MDBCardBody>
            <MDBCardBody>
                <MDBRow>
                    <MDBCol lg="4">
                    <React.Fragment >
                        <Grid container component="main" className={classes.root} align="center">
                            <Typography component="h1" variant="h4" maxWidth="lg" align="center" color="textPrimary" gutterBottom>
                             
                            </Typography>
                        </Grid>
                    </React.Fragment>
                    </MDBCol>
                </MDBRow>
            </MDBCardBody>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Main;