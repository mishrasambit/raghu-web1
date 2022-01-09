import React from 'react'
import {Badge, Nav } from 'react-bootstrap'
import FetchDataXls from '../../pages/FetchDataXls'
import CreateNewFilter from './CreateNewFilter'
import ExistingFilters from './ExistingFilters'
import UploadCsvFilter from './UploadCsvFilter'

const filterTabs=[
    {
        id: 1,
        key: 'existingFilters',
        text: 'Existing Filters'
    },
    {
        id: 2,
        key: 'createNewFilter',
        text: 'Create New Filter'
    },
    {
        id: 3,
        key: 'uploadCsvFilter',
        text: 'Upload Csv Filter'
    }
]
const Filters = () => {
    const [activeTab, setActiveTab]=React.useState("existingFilters")

    const setTabContent = (tabName)=>{
        switch(tabName){
            case 'existingFilters':
              return <ExistingFilters/>;
            case 'createNewFilter':
              return <CreateNewFilter/>;
            case 'uploadCsvFilter':
              return <UploadCsvFilter/>;
            default:
              return <ExistingFilters/>;
        }
    }

    return (
        <div>
            <Badge bg="light" text="dark">
                Filters
            </Badge>
            <Nav fill variant="tabs" defaultActiveKey={activeTab}
                onSelect={(selectedKey) => setActiveTab(selectedKey)}>
                {filterTabs.map(tab=>(
                    <Nav.Item key={tab.id}>
                        <Nav.Link eventKey={tab.key}>{tab.text}</Nav.Link>
                    </Nav.Item>
                ))}
            </Nav>
            {setTabContent(activeTab)}
            <FetchDataXls/>
        </div>
    )
}

export default Filters
