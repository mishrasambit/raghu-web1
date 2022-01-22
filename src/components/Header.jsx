import React ,{useEffect} from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import {setBrandName} from '../redux/brand/BrandAction'

const brandOptions = [
    
    {
        id: 2,
        brandName : "KnG"
    },
    {
        id: 3,
        brandName : "JAB"
    },
    {
        id: 4,
        brandName : "TMW"
    },
    {
        id: 5,
        brandName : "MOORES"
    }
]

const Header = () => {
    const [brand, setBrand] = React.useState('KnG')
    const dispatch = useDispatch();
    const brandReducer = useSelector(state => state.brandReducer)
    const setBrandValue=(brandName)=>{
        setBrand(brandName)
        dispatch(setBrandName(brandName))
    }
    useEffect(() => {
        dispatch(setBrandName(brand))
    }, [brand]);

    return (
        <header>
            <Navbar bg="custom-color" variant="dark" expand="lg">
                <Container >
                    <Navbar.Brand href="#home" style={{fontWeight: '700'}}>TAILORED BRANDS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" style={{justifyContent: 'end'}}>
                        <Nav className="me-auto" style={{ color: 'black', justifyContent: 'space-between', flexBasis: '100%'}}>
                            <NavDropdown title={brand} className="header-dropdown" id="basic-nav-dropdown">
                            {brandOptions.map((brandOption)=>(
                                <NavDropdown.Item key={brandOption.id} onClick={()=>{setBrandValue(brandOption.brandName)}} >
                                    {brandOption.brandName}</NavDropdown.Item>
                            ))}
                                {/* <NavDropdown.Item onClick={()=>{setBrand(Choose Brand)}} >Choose Brand</NavDropdown.Item>
                                <NavDropdown.Item {()=>{setBrand(Choose Brand)}} >K&G</NavDropdown.Item>
                                <NavDropdown.Item {()=>{setBrand(Choose Brand)}} >JAB</NavDropdown.Item>
                                <NavDropdown.Item {()=>{setBrand(Choose Brand)}} >TMW</NavDropdown.Item>
                                <NavDropdown.Divider /> 
                                <NavDropdown.Item {()=>{setBrand(Choose Brand)}} >MOORES</NavDropdown.Item> */}
                            </NavDropdown>
                            <Nav.Link href="#link" className="header-menu">QLPC Web</Nav.Link>                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
