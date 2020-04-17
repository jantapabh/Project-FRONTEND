import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";
import footer1 from '../static/images/footer1.png'
import footer2 from '../static/images/footer2.png'
import { Button } from 'react-bootstrap'


const Footer = () => {
    return (
        <MDBFooter color="white" className="font-small pt-3 mt-4" style={{ height: 230 }}>
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="4" center>
                        <img src={footer1} style={{ width: 400, height: 150 }} />
                    </MDBCol>
                    <MDBCol md="4" center>
                        <img src={footer2} style={{ width: 400, height: 150 }} />
                    </MDBCol>
                    <MDBCol md="0" center>
                        <Button variant="primary" href="https://www.facebook.com/Joajannnnnn" style={{ margin: 5, borderRadius: 50 }}><MDBIcon fab icon="facebook" size="3x"></MDBIcon></Button>
                    </MDBCol>
                    <MDBCol md="0" center>
                        <Button variant="primary" href="https://github.com/jantapabh" style={{ margin: 5, borderRadius: 50 }}><MDBIcon fab icon="github" size="3x" /></Button>
                    </MDBCol>
                    <MDBCol md="0" center>
                        <Button variant="primary" href="https://mail.google.com/mail/u/1/#inbox" style={{ margin: 5, borderRadius: 50 }}> <MDBIcon icon="envelope" size="3x" /></Button>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a> AI ELDERY </a>
                </MDBContainer>
            </div>
        </MDBFooter>


    )
}

export default Footer