import React from 'react'
import "./topbar.css"
import {NotificationsNone, Language, Settings} from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className="Topbar">
       <div className="topbarWrapper">
         <div className="topLeft">
             <span className="logo">KRONOS-ADMIN</span>
         </div>
         <div className="topRight">
           
           <div className="topbarIconsContainer">
           <NotificationsNone/>
           <span className="topIconBage">2</span>
           
           </div> 

           <div className="topbarIconsContainer">
           <Language/>
           <span className="topIconBage">2</span>
           


           </div> 
           <div className="topbarIconsContainer">
           <Settings/>
         
           


           </div> 
           <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="topAvartar" alt="" />
        </div>  
       </div> 
    </div>
  )
}
