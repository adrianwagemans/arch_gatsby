import React from  "react"
import Header from './header'
import Footer from "./footer"
import './styles/index.scss'
import  './layout.scss'


const Layout = (props) => {
    return (
        <div className='main'>
            <div className='mainContent'>
                <Header/>
                {props.children}
                
            </div>
            <Footer/>
        </div>
        
        )
}


export default Layout;