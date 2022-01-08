import React from 'react'
import {Nav, Badge} from 'react-bootstrap'
import ClassCard1101 from './ClassCard1101'
import ClassCard1102 from './ClassCard1102'
import ClassCard1103 from './ClassCard1103'
import ClassLevelDrillDown from './ClassLevelDrillDown'
import Colors from './Colors'
import FeatureCodes from './FeatureCodes'

const quickLookupTabs = [
    {
        id: 1,
        key: 'classCard1101',
        text: 'Class Card (1101)'
    },
    {
        id: 2,
        key: 'classCard1102',
        text: 'Class Card (1102)'
    },
    {
        id: 3,
        key: 'classCard1103',
        text: 'Class Card (1103)'
    },
    {
        id: 4,
        key: 'classLevelDrillDown',
        text: 'Class Level Drill Downs'
    },
    {
        id: 5,
        key: 'colors',
        text: 'Colors'
    },
    {
        id: 6,
        key: 'featureCodes',
        text: 'Feature Codes'
    },
]
const QuickLookup = () => {
    const [activeTab, setActiveTab]=React.useState("classCard1101")

    const setTabContent = (tabName)=>{
        switch(tabName){
            case 'classCard1101':
              return <ClassCard1101/>;
            case 'classCard1102':
              return <ClassCard1102/>;
            case 'classCard1103':
              return <ClassCard1103/>;
            case 'classLevelDrillDown':
                return <ClassLevelDrillDown/>;
            case 'colors':
              return <Colors/>
            case 'featureCodes':
              return <FeatureCodes/>;
            default:
              return <ClassCard1101/>;
        }
    }
    return (
        <div>
            <Badge bg="light" text="dark">
                Quick Lookup 
            </Badge>
            <Nav fill variant="tabs" defaultActiveKey={activeTab}
                onSelect={(selectedKey) => setActiveTab(selectedKey)}>
                {quickLookupTabs.map(tab=>(
                    <Nav.Item key={tab.id}>
                        <Nav.Link eventKey={tab.key}>{tab.text}</Nav.Link>
                    </Nav.Item>
                ))}
            </Nav>
            {setTabContent(activeTab)}
        </div>
    )
}

export default QuickLookup
