import React from 'react'
import Toolbar from 'components/ui/Navigation/Toolbar';
import Footer from 'components/ui/Footer';
import Scroll from './Scroll';


const Layout = (props) => {

        return (
           
            <div>               
                <Toolbar />    
                <main>
                    {props.children}
                </main>
                <Scroll />
                <Footer />
            </div>
           
        )
}



export default Layout;