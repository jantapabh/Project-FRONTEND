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
                    <MDBCol lg="6">
                        <a href="#!" className="green-text">
                            <h6 className="font-weight-bold mb-3">
                                <MDBIcon icon="dog" className="pr-2" size="3x" /> Animal</h6>
                        </a>
                        <h5 className="font-family-normal mb-3 p-0">
                            <strong style={{ margin: 5 }}>กราฟวงกลมแสดงจำนวนสุนัข (ปี 2562 รอบที่ 1)</strong>
                        </h5>
                        <Card border="primary" style={{ width: '42rem', height: '23rem', padding: 30, margin: 10 }} center>
                            <ChartOne />
                        </Card>
                    </MDBCol>
                    <MDBCol lg="5">
                        <a href="#!" className="green-text">
                            <h6 className="font-weight-bold mb-3">
                                <MDBIcon icon="dog" className="pr-2" size="3x" /> Animal</h6>
                        </a>
                        <h5 className="font-family-normal mb-3 p-0">
                            <strong style={{ margin: 5 }}>กราฟวงกลมแสดงจำนวนแมว (ปี 2562 รอบที่ 1)</strong>
                        </h5>
                        <Card border="primary" style={{ width: '42rem', height: '23rem', padding: 30, margin: 10 }} center>
                        <img src={show} style={{ height: 300 }} /> 
                        </Card>
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

