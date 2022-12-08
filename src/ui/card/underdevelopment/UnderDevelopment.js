import React from 'react'
import InProgress from '../../../assets/inProgress.jpg'
import styles from './underDevelopment.module.css'

export default function UnderDevelopment() {
  return (
    <>
    <img  src={InProgress}   className={styles.ImageStyle}/>
    </>

  )
}

