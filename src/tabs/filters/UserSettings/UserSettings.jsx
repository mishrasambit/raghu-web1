import React from 'react'
import { Nav } from 'react-bootstrap'
import LibraryDefaultDate from './LibraryDefaultDate'
import ProxyUser from './ProxyUser'
import Other from './Other'

const filterTabs=[
    {
        id: 1,
        key: 'libraryDefaultDate',
        text: 'Library Default Date'
    },
    {
        id: 2,
        key: 'proxyUser',
        text: 'Proxy User'
    },
    {
        id: 3,
        key: 'other',
        text: 'Other'
    }
]

const UserSettings = () => {
    const [activeTab, setActiveTab]=React.useState("existingFilters")

    const setTabContent = (tabName)=>{
        switch(tabName){
            case 'libraryDefaultDate':
              return <LibraryDefaultDate/>;
            case 'proxyUser':
              return <ProxyUser/>;
            case 'other':
              return <Other/>;
            default:
              return <LibraryDefaultDate/>;
        }
    }
  return (
    <div>
        <Nav fill variant="tabs" defaultActiveKey={activeTab}
                onSelect={(selectedKey) => setActiveTab(selectedKey)}>
                {filterTabs.map(tab=>(
                    <Nav.Item key={tab.id}>
                        <Nav.Link eventKey={tab.key}>{tab.text}</Nav.Link>
                    </Nav.Item>
                ))}
        </Nav>
        {setTabContent(activeTab)}
    </div>
  )
}

export default UserSettings