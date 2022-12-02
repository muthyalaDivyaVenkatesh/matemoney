import { TextInput,Dropdown,AutoComplete } from "../../ui/Input"
import { profileDetails, familyDetails, newAutoCompleteValues,keyForAutoCompleteDegree,keyForMarried,keyForMothertongue } from './ProfileConstants'
import { useState, useEffect } from 'react'
import styles from './Profile.module.css';
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';
import demo from '../../assets/profile.svg'
import Horoscopic from "../horoscope/Horoscopic";
import Photos from "../photos/Photos";
import { Button } from "@mui/material";
import { Users } from '../../config/api/api'
import jwt_decode from "jwt-decode";
import axios from "axios";
// import formFields from "../../Auth/Register/RegisterFields";
// import formFieldValues from '../../Auth/Register/RegisterFields'

function Profile() {
    let [profileValues, setprofileValues] = useState({
        name: '',
        marriedStatus:'',
        motherTongue:'',
        education:'',
        surName: '',
        gotram:'',
        age: '',
        height: '',
        complexation:'',
        education:'',
        collage: '',
        job:''
    })
    const [isEditing,setisEditing] = useState(false)

    const [familyDetailValues, setFamilyDeatils] = useState({
      fatherName:'',
      fatheroccupation:'',
      motherName:'',
      motheroccupation:'',
      nativePlace:'',
      presentCity:''  
    })
    let [editState, setEditstate] = useState({
        userDetails: false,
        familyDetails: false
    });
     
    useEffect(() => {
        const jwt = localStorage.getItem('jwtToken')
        const decoded = jwt_decode(jwt)
        console.log(decoded.id)
        Users.getAllDetails(decoded.id).then((val) =>{
            console.log(val,"00000000")
            console.log(val,val.data.profile.profileDetails.marriedStatus)
            if(val.data.profile?.profileDetails){
                setEditstate(true)
                setprofileValues((prevValues)=>({
                    ...val.data.profile.profileDetails
                }))

            } 
           if(val.data.profile?.familyDetails){
            console.log(val)
               setFamilyDeatils((prevValues)=>({
                       ...val.data.profile.familyDetails
                   }))
                }
    })}, []);

    function onChangeHandler(event) {
        console.log(event.target.name,event.target.value)
        setprofileValues((prevValues)=>({
            ...prevValues,
            [event.target.name]:event.target.value
        }))
    }

    function editHandler() {
        console.log("we are inside Edit Handle")
        setEditstate(true)
    }

    function profileChangeHandler(event){
        setFamilyDeatils((prevValues)=>({
            ...prevValues,
            [event.target.name]:event.target.value
        }))
    }
    

    function submitHandler(formName,event){
        console.log(formName,profileValues)
        event.preventDefault()
        if(formName=='userDetails'){
            // post to end Point
            Users.profileDetailsPost(profileValues).then((res)=>{
            alert("user Details Saved")
            console.log(res)
          }).catch(err =>{
            console.error(err)
          })
        }
        else{
            Users.familyDetilsPost(familyDetailValues).then((res) =>{
                alert("Personal Details Saved")
                console.log(res)
            }).catch(err =>{
                console.error(err)
            })
        }
    }

    function onChangeHandlerAuto(name,value){
        console.log(name,value["title"])
        let newValueinInt;
            if(name == 'marriedStatus' && isEditing){
                newValueinInt = keyForMarried.indexOf(value.title)
            }
            else if(name=='motherTongue' && isEditing){
                newValueinInt = keyForMothertongue.indexOf(value.title)
            }
            else if(name=='education' && isEditing){
                newValueinInt = keyForAutoCompleteDegree.indexOf(value.title)     
            }
        
      
        setprofileValues((prevValues)=>({
            ...prevValues,
            [name]:newValueinInt == 0 || !!newValueinInt? newValueinInt : value["title"]
        }))

    }

    return (
        <div className={styles.formContainer}>
            <section className={styles.profilePicContainer}>
                <img src={demo} width={300} height={300}/>
            </section>
            <section className={styles.profileDetailsContainer}>
                <section style={{ float:"right", cursor:'pointer' }} onClick={editHandler}>
                    {/* <SaveIcon></SaveIcon> */}
                    {!editState.userDetails ? <EditIcon ></EditIcon> : <SaveIcon></SaveIcon>}
                </section>
                <form onSubmit={submitHandler.bind(null,'userDetails')}>
                    <h3>User Details</h3>
                    {newAutoCompleteValues.map((searchValue)=> <AutoComplete  required={true} placeholder={searchValue.placeholder} label={searchValue.label} name={searchValue.name} value={profileValues[searchValue["name"]]} renderValues={searchValue.renderValues} changeHandler={onChangeHandlerAuto}  />)}
                    {profileDetails.map(val => <TextInput {...val} style={{paddingRight:30}} value={profileValues[val.name]} changeHandler={onChangeHandler} />)}
                    <Button variant="contained" type="submit" style={{marginTop:20}}> Submit</Button>
                </form>

                <section className={styles.familyDetails}>
                    <section style={{ float: 'right' }} onClick={editHandler}>
                        {!editState.familyDetails ? <EditIcon ></EditIcon> : <SaveIcon></SaveIcon>}
                    </section>
                    <h3>FamilyDetails</h3>
                    <form onSubmit={submitHandler.bind(null,'familyDetails')}>
                        {familyDetails.map(val => <TextInput {...val} value={familyDetailValues[val.name]} changeHandler={profileChangeHandler} />)}
                        <Button variant="contained" type="submit" style={{marginTop:20}}> Submit</Button>
                    </form>
                </section>
            </section>
            <section className={styles.horoscopeContainer}>
              <Horoscopic />
              <Photos />
            </section>

        </div>
    )
}

export default Profile