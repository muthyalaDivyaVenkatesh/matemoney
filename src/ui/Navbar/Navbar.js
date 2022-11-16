import styles from './Navbar.module.css'
import { NavgationItems } from '../../constants/NavigationItems'
import { NavLink } from 'react-router-dom'

import  logo  from '../../assets/logo_.jpg'

function Navbar() {
    return (
        <>
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
                    <img  src={logo} width="100" height="100" style={{ borderRadius: '50%'}}/>
                </section>
            </div>
        </>
    )
}

export default Navbar