function Card({content, image, link ,width='100%', clickHandler}){
     
    function cardHandler(){
         clickHandler(link)
     }

    return(
        <section style={{ display: 'flex', flexDirection:'row', flexBasis:'45%' }}>
        <section style={{marginLeft:40, background: 'rgb(203, 209, 204)', width:'100%',justifyContent:'center',borderRadius:20, textAlign:"center" , cursor:'pointer'}} onClick={cardHandler.bind(link)} >
          <img src={image}  style={{marginTop:'5rem'}}/>
          <dl>{content}</dl>
            </section>
        </section>
    )
}



export default Card