import { Container, Row, Col } from "react-bootstrap";

function  Footer(){

    return(
    <footer className="footer">
        <Container>
            <Row className="justify-content-center">
                <Col size={12} sm={6}>
                    <p>@Copyright 2023. All Rights Reserved</p>
                </Col>
            </Row>
      </Container>

    </footer>
    );
}

export default Footer;