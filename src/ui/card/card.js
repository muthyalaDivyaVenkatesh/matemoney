import styles from './card.module.css'

function Card({content, image, link ,width='100%', clickHandler}){
     
    function cardHandler(){
         clickHandler(link)
     }

    return(
        <section className={styles.cardContainer}>
        <section className={styles.cardInner} onClick={cardHandler.bind(link)} >
          <img src={image}  style={{marginTop:'5rem'}}/>
          <dl>{content}</dl>
            </section>
        </section>
    )
}



export default Card