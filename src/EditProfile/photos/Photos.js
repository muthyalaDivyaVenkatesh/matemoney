import { Button } from '@mui/material'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Users } from '../../config/api/api'
import styles from './photo.module.css'
import jwt_decode from 'jwt-decode'

function Photos() {
    const [image,setImage] = useState('')
    const [sendImage,setsendImage]=useState('')
    let userId;
    
    function changeHandler(event){
        console.log(event.target.files[0])
        setsendImage(event.target.files[0])
        setImage(URL.createObjectURL(event.target.files[0]))
    }

    useEffect(()=>{
        const jwt = localStorage.getItem('jwtToken')
        const decoded = jwt_decode(jwt)
        console.log(decoded.id)
        userId = decoded.id
        Users.getImage(decoded.id).then((val)=>{
            console.log(val.data.imageUrl)
            setImage(val.data.imageUrl)
        })
    },[])

    function removeImage(){
        setImage('')
    }

    function submitImageHandler(){
        const jwt = localStorage.getItem('jwtToken')
        const decoded = jwt_decode(jwt)
        console.log("we are seeeing the Image Handler")
        let  bodyFormData = new FormData();
        bodyFormData.append('image',sendImage)
        bodyFormData.append('userId',decoded.id)
        Users.postImage(bodyFormData).then((val) =>{
            console.log(val)
        })
        
    }
    return (
        <>
            <section className={styles.uploadPhotos}>
                <h3>Upload Pic</h3>
                <input type="file" onChange={changeHandler}  />
                {!!image&&(<>
                <p style={{ color: 'blue'}}>click on the image to remove and upload another Photo</p>
                <img src={image}  onClick={removeImage} style={{marginTop:20}}width={300} height={300}/>
                </>
                )}
                 <section >
                <Button variant="contained" type="click" style={{ marginTop:20 ,width:100}} onClick={submitImageHandler}> Submit</Button>
                <Button variant='contained' type="click" style={{ marginTop:20,marginLeft:20,width:100}} color='error'>Delete</Button>
                 </section>
            </section>

        </>
    )
}

export default Photos