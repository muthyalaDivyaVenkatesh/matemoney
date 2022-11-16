import { TextInput } from "../../ui/Input"
import { profileDetails, familyDetails, horoscope } from './ProfileConstants'
import { useState } from 'react'
import styles from './Profile.module.css';
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';
import demo from '../../assets/profile.svg'
import Horoscopic from "../horoscope/Horoscopic";
import Photos from "../photos/Photos";

function Profile() {

    let [profileValues, setprofileValues] = useState({
        name: '',
        surName: '',
        age: '22',
        height: ''
    })
    let [editState, setEditstate] = useState({
        userDetails: false,
        familyDetails: false
    });

    function onChangeHandler() {

    }

    function editHandler() {
        console.log("we are inside Edit Handle")
        setEditstate(true)
    }

    return (
        <div className={styles.formContainer}>
            <section className={styles.profilePicContainer}>
                <img src={demo} width={300} height={300}/>
            </section>
            <section className={styles.profileDetailsContainer}>
                <section style={{ justifyContent: 'end', cursor: 'pointer' }} onClick={editHandler}>
                    {/* <SaveIcon></SaveIcon> */}
                    {!editState.userDetails ? <EditIcon ></EditIcon> : <SaveIcon></SaveIcon>}
                </section>
                <form >
                    <h3>User Details</h3>
                    {profileDetails.map(val => <TextInput {...val} style={{paddingRight:30}} value={profileValues[val.name]} changeHandler={onChangeHandler} />)}
                </form>

                <section className={styles.familyDetails}>
                    <section style={{ float: 'right' }} onClick={editHandler}>
                        {!editState.familyDetails ? <EditIcon ></EditIcon> : <SaveIcon></SaveIcon>}
                    </section>
                    <h3>FamilyDetails</h3>
                    <form>
                        {familyDetails.map(val => <TextInput {...val} value={profileValues[val.name]} changeHandler={onChangeHandler} />)}
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