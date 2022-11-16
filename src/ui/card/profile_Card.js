function  ProfileCard({ imageUrl, age=21, height=6, religion='hindu', language='Telugu', state="Andhra" }){
 return(
 <section style={{  height:'22vh', margin: '10px', display: 'flex', flexDirection:'row', background: 'white', borderRadius: '20px', padding:20}}>
     <img  src={imageUrl} style={{ width: '40%',height: '100%',objectFit: 'contain'}}/>
     <section style={{display:'flex', gap:'25px', flexDirection:'row', alignItems: 'spaceBetween', flexWrap:'wrap'}}>
     <span>AGE :{age}</span>
     <span>HEIGHT:{height}</span>
     <span>RELIGION:{religion}</span>
     <span>LANGUAGE:{language}</span>
     <span>STATE:{state}</span>
     <span>EDUCATION:{state}</span>
     <span>JOB:{state}</span>
     </section>
 </section>
)
}

export default ProfileCard