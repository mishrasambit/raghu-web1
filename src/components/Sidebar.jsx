import React from 'react'
import {Nav} from 'react-bootstrap'

const sideNavList = [
    {
        id: 1,
        key: 'quicklookup',
        text: 'Quick Lookup'
    },
    {
        id: 2,
        key: 'filters',
        text: 'Filters'
    },
    {
        id: 3,
        key: 'pricechange',
        text: 'Price Change'
    },
    {
        id: 4,
        key: 'help',
        text: 'Help'
    },
    {
        id: 5,
        key: 'admin',
        text: 'Admin'
    }
]

const Sidebar = (props) => {
    return (
        <Nav defaultActiveKey="/home" 
            className="flex-column" 
            onSelect={(selectedKey) => props.setMainContnet(selectedKey)}>
            {sideNavList.map((navitem)=>(
                <Nav.Link key={navitem.id} eventKey={navitem.key} className="side-nav-item">
                    {navitem.text}</Nav.Link>
            ))}            
        </Nav>        
    )
}

export default Sidebar
