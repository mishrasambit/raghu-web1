import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

const MainContent = (props) => {
    return (
        <main style={{ backgroundColor: "#003049", height: "100vh" }}>
            <Container>
                <Row className="show-grid">
                    <Col xs={1} md={2}></Col>
                    <Col xs={4} md={8} style={{}}>
                        <Card style={{ margin: "20px 0", height: "50vh" }}>
                            <Card.Body>{props.children}</Card.Body>
                        </Card>
                    </Col>
                    <Col xs={1} md={2}></Col>
                </Row>
            </Container>
        </main>
    )
}

export default MainContent
