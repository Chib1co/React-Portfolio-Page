import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import "./style.css"

export default function Form(props) {
    return (
        <Row>
            <Col lg="7" className="form">
                <div className="card shadow contact-me-card">
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Name</label>
                            <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="Firstname Lastname" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput2">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="name@example.com" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </form>


                    <button type="button" className="btn btn-info">submit</button>
                </div>

            </Col>
        </Row>
    )
}