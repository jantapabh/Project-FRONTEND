import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";
import footer1 from '../static/images/footer1.png'
import footer2 from '../static/images/footer2.png'


const Footer = () => {
    return (
        <MDBFooter color="white" className="font-small pt-3 mt-4" style={{ height: 230}}>
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="4" center>
                        <img src={footer1} style={{ width: 400, height: 150 }} />
                    </MDBCol>
                    <MDBCol md="4" center>
                        <img src={footer2} style={{ width: 400, height: 150 }} />
                    </MDBCol>
                    <MDBCol md="1" center>
                                <MDBIcon fab icon="facebook" size="5x" /> 
                    </MDBCol>
                    <MDBCol md="1" center>
                                <MDBIcon fab icon="github" size="5x" /> 
                    </MDBCol>
                    <MDBCol md="1" center>
                                <MDBIcon icon="envelope" size="5x" /> 
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