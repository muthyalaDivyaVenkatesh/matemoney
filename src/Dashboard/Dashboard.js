import ProfileCard from "../ui/card/profile_Card"
import  profile from '../assets/profile.svg'

function Dashboard(){
    return(
        <>
          <ProfileCard imageUrl={profile} />
        </>
    )
}

export default Dashboard