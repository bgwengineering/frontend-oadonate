import React, {useState} from 'react'
import Navbar from './Navbar'
import SideDrawer from './SideNav/SideDrawer'
import TopNav from './TopNav'

const Toolbar = ({drawerToggle, closed}) => {
  const [open, setOpen] = useState(false)
  
  const OpenSideBar = () =>{
      setOpen((prev)=>!prev)
  }
const handleClickAway = () =>{
    setOpen(false)
}

  
    return ( 
        <>
        <TopNav/>
        <header className='nav-toolbar'>       
        <Navbar menuOpen={OpenSideBar} />
        </header>
        {open ? <SideDrawer handleClickAway={handleClickAway}/> : null }
        </>     
    )
}

export default Toolbar
