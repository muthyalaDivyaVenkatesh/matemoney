import { useState } from 'react'
import { Dropdown, TextInput } from '../../ui/Input'
import styles from './Register.module.css'
import {colorConstants} from '../../constants/colorConstants'
import formFields from './RegisterFields'
import  marrageImage  from '../../assets/marry.jpg'
import CustomButton from '../../ui/CustomButton';
import CustomModal from '../../ui/CustomModal'
import { Alert } from '@mui/material'


function Register(){

  const [userForm, setFormValues] = useState({
    name:'',
    profileFor:'',
    motherTongue: '',
    gender:'',
    region:'',
    phoneNo:'',
    password:'',
    noError:true,
    errorKeys:[]
  })


  function registerFormHandle(event){
    console.log(event.target.name)
     setFormValues({
      ...userForm,
      [event.target.name]: event.target.value
     })
  } 

  let formFieldValues = formFields(userForm,registerFormHandle)
  
  function registerHandler(event){
    event.preventDefault()
    console.log("hi form submited",userForm)
    let error = Object.keys(userForm).filter(val => !userForm[val])
    setFormValues ({
      ...userForm,
      errorKeys: error.map(val => val+" ")
    })
    
    if(userForm.errorKeys.length){
      setFormValues({
        ...userForm,
        noError: false
      })
    }
  console.log(userForm.errorKeys)
   alert(userForm.errorKeys)
    
  }
    return (

        <section className={styles.registerContainer}>
          
          <section className={styles.registerContent}>
            <img src={marrageImage} className={styles.Image}/>
          </section>
          {!userForm.noError?<Alert severity="error" style={{ position: 'absolute', top:'8rem'}}>There is An Error plese Check the following Keys {userForm.errorKeys.map((val) => val)}</Alert>:''}
          <form className={styles.registerForm} onSubmit={registerHandler}>
            <h2 style={{color:colorConstants.primary500}}>REGISTER FOR FREE</h2>
            <TextInput label="Enter Your Name"  required={true} name='name'  value={userForm.name}  changeHandler={registerFormHandle} style={{ width:'80%'}}/>
            {formFieldValues.map(dropDown => <Dropdown {...dropDown}  changeHandler={registerFormHandle}  key={dropDown.id}/>)}
            <TextInput required={true} label="Enter your Phone No" type="number"  name='phoneNo' value={userForm.phoneNo} changeHandler={registerFormHandle} style={{ width:'80%'}} />
            <TextInput required={true} label="Enter your Password"  name='password'  type="password" value={userForm.password}  changeHandler={registerFormHandle} style={{ width:'80%'}}/>
             <CustomButton  style={{ width:'80%'}}> Register </CustomButton>          
          </form>
       
        </section>
    )
}


export default Register

