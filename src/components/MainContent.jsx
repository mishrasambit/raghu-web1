import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Sidebar from './Sidebar'
import QuickLookup from '../tabs/quicklookup/QuickLookup'
import Filters from '../tabs/filters/Filters'
import PriceChange from '../tabs/pricechange/PriceChange'
import Help from '../tabs/help/Help'
import Admin from '../tabs/admin/Admin'

const MainContent = (props) => {
    const [activeContent, setActiveContent]=React.useState("quicklookup")
    const setMainContent = (contentName)=>{
        switch(contentName){
            case 'quicklookup':
              return <QuickLookup/>;
            case 'filters':
              return <Filters/>;
            case 'pricechange':
              return <PriceChange/>;
            case 'help':
              return <Help/>;
            case 'admin':
              return <Admin/>
            default:
              return <QuickLookup/>;
        }
    }

    const setMainContentHandler=(content)=>{
        console.log("content::",content)
        setActiveContent(content)
    }
    
    return (
        <main style={{ backgroundColor: "#003049", height: "100vh" }}>
            <Row className="show-grid reset-margin">
                <Col md={2} className="side-nav-col">
                    <Sidebar setMainContnet={setMainContentHandler}/>
                </Col>
                <Col md={10}>
                    <Container>
                        <Row className="show-grid">
                            <Col xs={1} md={0}></Col>
                            <Col xs={4} md={12} style={{}}>
                                <Card style={{ margin: "20px 0", height: "90vh" }}>
                                    <Card.Body>
                                        {setMainContent(activeContent)}
                                        {/* <QuickLookup/>
                                        <Filters/>
                                        <PriceChange/>
                                        <Help/>
                                        <Admin/> */}
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={1} md={0}></Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </main>
    )
}

export default MainContent
