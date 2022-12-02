import ProfileCard from "../ui/card/profile_Card"
import  profile from '../assets/profile.svg'
import { Users } from "../config/api/api";
import { useState, useEffect} from 'react'

function Dashboard(){
  const [allDetails,setAllDetails] = useState([])
   useEffect(() => {
     Users.getAllDetails().then((val) =>{
      console.log(val,"ll",val.data.posts)
      setAllDetails(val.data.posts)
     })
   }, []);
  
    return(
        <>
        {allDetails.map(val =>(
          <ProfileCard imageUrl={profile}  {...val}/>
        ))}
        </>
    )
}

export default Dashboard