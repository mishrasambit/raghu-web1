import React from 'react'
import {Nav, NavDropdown} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import {HiOutlineDocumentSearch} from 'react-icons/hi'
import {BsFilterSquare} from 'react-icons/bs'
import {MdOutlinePriceChange} from 'react-icons/md'
import {BiHelpCircle} from 'react-icons/bi'
import {RiAdminFill} from 'react-icons/ri'
import {FiLogOut} from 'react-icons/fi'
import {useDispatch, useSelector} from 'react-redux'
import {logout} from '../redux/features/login/loginSlice';

const sideNavList = [
    {
        id: 1,
        key: 'quicklookup',
        text: 'Quick Lookup',
        icon :<HiOutlineDocumentSearch/>
    },
    {
        id: 2,
        key: 'filters',
        text: 'Filters',
        icon :<BsFilterSquare/>
    },
    {
        id: 3,
        key: 'pricechange',
        text: 'Price Change',
        icon :<MdOutlinePriceChange/>
    },
    {
        id: 4,
        key: 'help',
        text: 'Help',
        icon :<BiHelpCircle/>
    },
    {
        id: 5,
        key: 'admin',
        text: 'Admin',
        icon :<RiAdminFill/>
    }
]

const Sidebar = (props) => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const doLogout = ()=>{
        dispatch(logout())
        navigate("/")
    }
    return (
        <Nav defaultActiveKey="/home" 
            className="flex-column" 
            onSelect={(selectedKey) => props.setMainContnet(selectedKey)}>
            {sideNavList.map((navitem)=>(
                <Nav.Link key={navitem.id} eventKey={navitem.key} className="side-nav-item">
                   {navitem.icon} {navitem.text}</Nav.Link>
            ))}      
            <NavDropdown.Divider />
            <Nav.Link key="100" eventKey="logout" className="side-nav-item" 
                onClick={doLogout}>
                   <FiLogOut/> logout</Nav.Link>    
        </Nav>        
    )
}

export default Sidebar
