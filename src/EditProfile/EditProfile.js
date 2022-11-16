import Card from "../ui/card/card"
import demoImage from '../assets/marry.jpg'
import editProfile from '../constants/EditProfile'
import { useNavigate } from "react-router-dom"

function  EditProfile(){
     let navigate = useNavigate()
    function navigateToLink(profileValue){
        console.log(profileValue)
        navigate(profileValue)
        
     }

    return(
        <div style={{ display: 'flex', flexWrap: 'wrap', gap:30, height:'92vh', background:'white'}}>
        
         {editProfile.map((value)=>(
            <Card key={value.content}content={value.content} image={value.image} link={value.link} clickHandler={navigateToLink}/>
         ))}
        </div>
    )
}

export default EditProfile