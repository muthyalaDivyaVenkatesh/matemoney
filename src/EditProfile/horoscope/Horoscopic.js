import styles from './horoscopic.module.css'
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';
import { horoscope } from '../profile/ProfileConstants';
import { TextInput } from '../../ui/Input';
import {useState } from 'react'
import Photos from '../photos/Photos';

function Horoscopic() {
    const [formValues, setFormValues] = useState({
       zodic:'',
       star:'',
       birthTime: ''
    })

    const [editState,setEditState] = useState({
        familyDetails: false 
    })

    function onChangeHandler(){

    }
    return (
        <section className={styles.horoscope}>
            <section style={{ marginLeft: '90%' }}>
                {!editState.familyDetails ? <EditIcon ></EditIcon> : <SaveIcon></SaveIcon>}
            </section>
            <h3>HOROSCOPE</h3>
            {horoscope.map(val => <TextInput {...val} value={formValues[val.name]} changeHandler={onChangeHandler} />)}
        </section>
    )
}

export default Horoscopic