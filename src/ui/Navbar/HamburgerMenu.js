
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NavgationItems } from '../../constants/NavigationItems';
import styles from './Navbar.module.css'

function HamburgerMenu(){
   let [showMenu,setShowmenu] = useState(false)
    // onChange Handler
    function onchangeHandler(){
        setShowmenu((prevState) => !prevState)
    }

    return (
        <div className={styles.HamburgerMenuList}>
        <MenuIcon onClick={onchangeHandler}/>
        <ul>
        {showMenu && <section>{NavgationItems.map((NavigationItem) => (
                <NavLink to={NavigationItem.link} className={styles.NavLinkMobile} style={({ isActive}) => isActive ? {background: '#d10a10', color: 'white' } : null}>
                    <NavigationItem.icon />
                    <h4>{NavigationItem.Heading}</h4>
                </NavLink>
                ))}
                </section>}
        </ul>
        </div>
    ) 
}

export default HamburgerMenu