import React from "react"
import { AiFillSetting, AiOutlineFilter, AiFillClockCircle, AiFillPlusCircle } from "react-icons/ai"
import classes from '../assets/styles/Navbar.module.css'

const Navbar = () => {
    return (
        <nav 
        className="navbar is-primary"
        role="navigation"
        aria-label="main navigation" >
            <div className={'nav-bar container'}>
                   <div  className={[classes.navbarLeft,classes.navbarSetting]}>
                        <AiFillSetting className={classes.navIcons}/> 
                    </div>
                   <div className={[classes.navbarLeft,classes.navbarSetting]}>
                        <AiFillClockCircle className={classes.navIcons}/>
                        <AiOutlineFilter className={classes.navIcons}/>
                        <AiFillPlusCircle className={classes.navIcons}/>
                    </div>
            </div>
        </nav>
    )
}



export default Navbar