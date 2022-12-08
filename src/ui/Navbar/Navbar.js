import styles from './Navbar.module.css'
import { NavgationItems } from '../../constants/NavigationItems'
import { NavLink } from 'react-router-dom'

import  profile  from '../../assets/profile.svg'
import  logo  from '../../assets/logo_.jpg'
import { Button } from '@mui/material'
import { useState } from 'react'
import HamburgerMenu from './HamburgerMenu'
// import  Example from './HamburgerMenu'

function Navbar() {
    const [logout,setLogout] = useState(false)

    function profileClickHandler(){
        setLogout((prevValue) => !prevValue)
    }

    function deleteProfileHandler(){
        // trigger the delete

    }

    function  logoutHandler(){
        localStorage.removeItem("jwtToken")
    }

    function showHamburgerMenu(){

    }
    return (
        <>
            <HamburgerMenu onClick={showHamburgerMenu} />
            <div className={styles.NavbarContainer}>
            <img src={logo} style={{ width:80, height:80  }}/>
                <section className={styles.NavLinks}>{NavgationItems.map((NavigationItem) => (
                <NavLink to={NavigationItem.link} className={styles.NavLink} style={({ isActive}) => isActive ? {background: '#d10a10', color: 'white' } : null}>
                    <NavigationItem.icon  style={{height:55,width:55}}/>
                    <h4>{NavigationItem.Heading}</h4>
                </NavLink>
                ))}
                </section>
                <section className={styles.ProfilePhoto}>
                    <img  src={profile} onClick={profileClickHandler} width="80" height="80" style={{ borderRadius: '50%', cursor:'pointer'}}/>
                    {logout && <section className={styles.logoutLink}>
                        <Button color='error' onClick={logoutHandler}>Logout</Button>
                        <Button color="error" onClick={deleteProfileHandler}>DeleteProfile</Button>
                    </section>}
                </section>
            </div>
        </>
    )
}

export default Navbar