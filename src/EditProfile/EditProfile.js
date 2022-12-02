import Card from "../ui/card/card"
import demoImage from '../assets/marry.jpg'
import editProfile from '../constants/EditProfile'
import { useNavigate } from "react-router-dom"
import styles from './EditProfile.module.css'


function  EditProfile(){
     let navigate = useNavigate()
    function navigateToLink(profileValue){
        console.log(profileValue)
        navigate(profileValue)
        
     }

    return(
        <div className={styles.editProfile}>
         {editProfile.map((value)=>(
            <Card key={value.content}content={value.content} image={value.image} link={value.link} clickHandler={navigateToLink}/>
         ))}
        </div>
    )
}

export default EditProfile