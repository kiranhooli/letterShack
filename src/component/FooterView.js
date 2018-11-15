import React from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';

class FooterView extends React.Component {
    render(){
        return(
            <Footer color="pytm-col" className="font-small pt-4 mt-4 b-0">
                <Container fluid className="text-center text-md-left">
                    <Row>
                    <Col sm="6">
                        <h5 className="title">Letter Shack</h5>
                        <p>Created By : <b>Kiran Hooli</b></p>
                    </Col>
                    </Row>
                </Container>
                <div className="footer-copyright text-center py-3">
                    <Container fluid>
                        &copy; {(new Date().getFullYear())} Copyright: lettershack.com 
                    </Container>
                </div>
            </Footer>
        );
    }
}

export default FooterView;