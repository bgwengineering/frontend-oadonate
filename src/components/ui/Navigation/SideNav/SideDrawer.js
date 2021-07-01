import React from 'react'
import SidenavContent from './SidenavContent';
import ClickAwayListener from '@material-ui/core/ClickAwayListener'; 


function SideDrawer({handleClickAway}){
        return (   
        <ClickAwayListener onClickAway={handleClickAway}>
          <div className= "SideDrawer Open">   
          <div className='times_utf'>
              <div className="times-bt-container">
                  <button className="times-bt" onClick={()=>handleClickAway()}>&times;</button>
              </div>  
              </div> 
           <nav>     
              <SidenavContent handleClickAway={handleClickAway}/>
          </nav>
      </div> 
      </ClickAwayListener>
    )
}

export default SideDrawer;
