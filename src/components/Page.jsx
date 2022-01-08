import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import MainContent from './MainContent';

const Page = (props) => {
    return (
        <div>
        <Header/>
        <MainContent>{props.children}</MainContent>
        </div>
    )
}

export default Page
