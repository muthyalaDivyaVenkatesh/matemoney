import { useRef, useState } from 'react'
import { Dropdown, TextInput } from '../../ui/Input'
import styles from './Register.module.css'
import {colorConstants} from '../../constants/colorConstants'
import formFields from './RegisterFields'
import  marrageImage  from '../../assets/marry.jpg'
import CustomButton from '../../ui/CustomButton';
import CustomModal from '../../ui/CustomModal'
import { Alert, TextField } from '@mui/material'
import axios from 'axios'
import { get, post } from '../../config/api'
import validator from 'validator' 
import { Users } from '../../config/api/api'
import { useNavigate } from 'react-router-dom'


function Register(){
  let navigate = useNavigate()
  const [userForm, setFormValues] = useState({
    name:'',
    profileFor:'',
    motherTongue: '',
    gender:'',
    region:'',
    phoneNo:'',
    password:'',
    noError:true,
    email: '',
    errorMsg:[]
  })

  let [phoneNoError,setphoneNoError] = useState(false)
 let intialState = {
  name:'',
  profileFor:'',
  motherTongue: '',
  gender:'',
  region:'',
  phoneNo:'',
  password:'',
  noError:true,
  email: '',
  errorMsg:[]
}
  function registerFormHandle(event){
    console.log(event.target.name)
     setFormValues({
      ...userForm,
      [event.target.name]: event.target.value
     })
     if(userForm.phoneNo.length == 10) {
      setphoneNoError(false)
     }
  } 

  let formFieldValues = formFields(userForm,registerFormHandle)
  
  function registerHandler(event){
    event.preventDefault()
    console.log("hi form submited",userForm)
    if(userForm.phoneNo.trim().length !== 10){
      setphoneNoError(true)
    }else {
      setphoneNoError(false)
    }
    console.log("WE are seeeing the userForm",userForm)
     Users.signIn(userForm).then(val =>{
       setFormValues({...intialState})
       console.log(val,"RESPONSE FROM BACKEND")
      alert("Successfully loggdin",val,val.data.token)
      localStorage.setItem('jwtToken', val.data.token)
      navigate('/manage/profile')
     }).catch(err =>{
      console.log("we are seeing the Error",err)
      setFormValues((prevValues)=>(
        {
          ...prevValues,
          errorMsg: [...prevValues.errorMsg,err.error]
        }
      ))
      alert(err.error)
      console.error(err)
     })
  }
    return (
        <section className={styles.registerContainer}>
          <section className={styles.registerContent}>
            <img src={marrageImage} className={styles.Image}/>
          </section>
          {userForm.errorMsg.length?<Alert severity="error" style={{ position: 'absolute', top:'8rem'}}>ERROR :-{userForm.errorMsg}</Alert>:''}
          <form className={styles.registerForm} onSubmit={registerHandler}>
            <h2 style={{color:colorConstants.primary500}}>REGISTER FOR FREE</h2>
            <TextInput label="Enter Your Name"  required={true} name='name'  value={userForm.name}  changeHandler={registerFormHandle} style={{ width:'80%'}}/>
            {formFieldValues.map(dropDown => <Dropdown {...dropDown}  changeHandler={registerFormHandle}  key={dropDown.id}/>)}
            <TextField  required={true}  variant="standard"  label="Enter your Phone No"  type="number"    name='phoneNo' value={userForm.phoneNo} onChange={registerFormHandle} style={{ width:'80%'}} />
            {phoneNoError && <Alert severity="error">Phone No must be 10 digits</Alert>}
            <TextInput required={true} label="Enter your Email" type="email"  name='email' value={userForm.email} changeHandler={registerFormHandle} style={{ width:'80%'}} />
            <TextInput required={true} label="Enter your Password"  name='password'  type="password" value={userForm.password}  changeHandler={registerFormHandle} style={{ width:'80%'}}/>
             <CustomButton  style={{ width:'80%'}}> Register </CustomButton>          
          </form>
       
        </section>
    )
}


export default Register

