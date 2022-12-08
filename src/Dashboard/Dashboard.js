import ProfileCard from "../ui/card/profile_Card"
import  profile from '../assets/profile.svg'
import { Users } from "../config/api/api";
import { useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addPosts } from "../store/profileSlice";

function Dashboard(){
  const dispatch = useDispatch()
  const profiles = useSelector((state) => state.profiles)

   useEffect(() => {
     Users.getProfiles().then((val) =>{
      console.log(val,"ll",val.data.posts)
      dispatch(addPosts(val.data.posts))
     })
   }, []);
  
    return(
        <>
        {profiles?.map(val =>(
          <ProfileCard imageUrl={profile}  {...val}/>
        ))}
        </>
    )
}

export default Dashboard