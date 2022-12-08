import styles from './profileCard.module.css'

function  ProfileCard(userDetails){
 return(
 <section className={styles.ProfileCardContainer}>
     <img  src={userDetails?.photoDetails?.imageName} style={{ width: '20%',height: '100%',objectFit: 'contain', margin:'auto'}} alt="No Image"/>
     <section className={styles.innerProfileContainer}>
     <span>SurName:{userDetails?.profileDetails?.surName}</span>  
     <span>Gotram:{userDetails?.ZodicDetails?.gotram}</span>    
     <span>AGE :{userDetails?.profileDetails?.age}</span>
     <span>HEIGHT:{userDetails?.profileDetails?.height}</span>
     <span>JOB:{userDetails?.profileDetails?.job}</span>
     <span>presentCity:{userDetails?.familyDetails?.presentCity}</span>
     <span>NATIVEPLACE:{userDetails?.familyDetails?.nativePlace}</span>
     </section>
 </section>
)
}

export default ProfileCard