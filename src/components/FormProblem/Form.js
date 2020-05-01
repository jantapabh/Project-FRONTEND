import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';

const Form = () => {
    
    return (

        <div style={{ margin: 10}}>
        <MDBContainer>
            <MDBRow>
                <MDBCol md="50">
                    <form style={{ borderBlockStyle: 'dotted'}}>
                        <p className="h3 text-center mb-4" style={{ backgroundColor: 'red', margin: 20, padding: 20, borderRadius: 50}}>Write Problem on Your Device</p>
                        <label htmlFor="defaultFormContactNameEx" className="grey-text">
                            Your Company
        </label>
                        <input type="text" id="defaultFormContactNameEx" className="form-control" />
                        <br />
                        <label htmlFor="defaultFormContactEmailEx" className="grey-text">
                            Your email
        </label>
                        <input type="email" id="defaultFormContactEmailEx" className="form-control" />
                        <br />
                        <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
                            Your Telephone
        </label>
                        <input type="text" id="defaultFormContactSubjectEx" className="form-control" />
                        <br />
                        <label htmlFor="defaultFormContactMessageEx" className="grey-text">
                            Your Problem
        </label>
                        <textarea type="text" id="defaultFormContactMessageEx" className="form-control" rows="3" />
                        <div className="text-center mt-4">
                            <MDBBtn color="warning" outline type="submit">
                                Send
                    <MDBIcon far icon="paper-plane" className="ml-2" />
                            </MDBBtn>
                        </div>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        </div>
    );
};

export default Form;