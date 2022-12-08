import styles from './horoscopic.module.css'
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';
import { horoscope } from '../profile/ProfileConstants';
import { TextInput } from '../../ui/Input';
import {useEffect, useState } from 'react'
import { Button } from '@mui/material';
import { Users } from '../../config/api/api';



function Horoscopic({ birthTime, gotram, star, zodic}) {
  console.log("WE ARE INSIDE HOROSCOPIC DETAILS", birthTime, gotram,star,zodic)
    const [formValues, setFormValues] = useState({
       zodic:  '',
       star:  '',
       birthTime:  '',
       gotram:  ''
    })

    useEffect(() => {
      setFormValues({
        zodic,
        star,
        birthTime,
        gotram
      })
    }, [birthTime, gotram, star, zodic]);

    const [editState,setEditState] = useState({
        familyDetails: false 
    })

    function onChangeHandler(event){
        setFormValues((prevValues)=>({
            ...prevValues,
            [event.target.name]:event.target.value
        }))
    }

    async function submitHandler(event){
        event.preventDefault()
      try{
          let res = await Users.zodicDetailsPost(formValues)
          alert("zodic Details Saved Successfully")
      }
      catch(err){
        console.err(err)
        alert(err)
      }
    }

    return (
        <section className={styles.horoscope}>
            <section style={{ marginLeft: '90%' }}>
                {!editState.familyDetails ? <EditIcon ></EditIcon> : <SaveIcon></SaveIcon>}
            </section>
            <form onSubmit={submitHandler}>
            <h3>HOROSCOPE</h3>
            {horoscope.map(val => <TextInput {...val} value={formValues[val.name]}  style={{ width:'60%'}}changeHandler={onChangeHandler} />)}
            <dl/>
            <Button variant="contained" type="submit" style={{marginTop:20}}> Submit</Button>
            </form>
            
        </section>
    )
}

export default Horoscopic