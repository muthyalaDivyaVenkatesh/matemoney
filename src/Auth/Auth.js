import styles from './Auth.module.css'
import Login from './Login/Login'
import Register from './Register/Register'

function Auth(){
    return(
        <div className={styles.authContainer}>
           <Login />
           <Register />
        </div>
    )
}


export default Auth