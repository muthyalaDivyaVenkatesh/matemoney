import styles from './Login.module.css'
import  logo  from '../../assets/logo_.jpg'
import { TextInput } from '../../ui/Input'
import { useState } from 'react'
import CustomButton from '../../ui/CustomButton'
import { colorConstants} from '../../constants/colorConstants'
import { Users } from '../../config/api/api'
import { Navigate, useNavigate } from 'react-router-dom'

function Login(){
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()

    function passwordHandler(event){
        console.log("we are inside password Handler")
        setPassword(event.target.value)
    }

    function emailHandler(event){
        console.log("we are inside Email Handler")
         setEmail(event.target.value)
    }
    function submitHandler(event){
         event.preventDefault()
        // login to dashboard
        console.log("USER IS LOGGEDIN")
        Users.logIn({
            email:email,
            password:password
        }).then((val)=>{
            localStorage.setItem('jwtToken', val.data.token)
             alert("Successfully loogedin")
             navigate('/manage')           
        }).catch(err =>{
            console.log("we are seeing the Error",err)
            alert("Error Occured while Logging IN")
        })
        
    }
    return(
        <section className={styles.loginHeader}>
            <section className={styles.heading}>   
            <img src={logo} style={{ width:80, height:80  }}/>
            </section>
            <form  className={styles.loginForm} onSubmit={submitHandler}>
                <TextInput value={email} label="Email/phoneNo" changeHandler={emailHandler}/>
                <TextInput type="password" value={password} label="Password" changeHandler={passwordHandler}/>
                <CustomButton style={{ backgroundColor: colorConstants.primary500 }}>Login</CustomButton>
            </form>
        </section>
    )
}

export default Login