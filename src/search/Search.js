import { useState } from "react";
import serachValues from "../constants/searchConstants";
import { AutoComplete, Dropdown } from "../ui/Input"
import  CustomButton  from "../ui/CustomButton"
import styles from './search.module.css'
import { Users } from "../config/api/api";

// search
function Search(){
    let [searchValues,setSearchValues] = useState({
        age: 18,
        toage: 50,
        height: 4,
        toheight: 6,
        marriedStatus: 'unMarried',
        motherTongue: 'telugu',
        education: 'B-Tech',

    })
    
    let searchHanlder = (event) => {
        console.log(event.target.value,event.target.name,"ssssssss")
        setSearchValues((prevValues) => ({
            ...prevValues,
            [event.target.name] : event.target.value
        }))

        }


    let autoCompletechangeHandler = (name,value) =>{
        console.log(name,value,"kikiiiikiiii",value)
        setSearchValues((prevValues) =>({
            ...prevValues,
            [name]: value
        }))
    }
    
    let heightandAge =  (searchValue) => (
        <>
        <h4 style={{ width: '50%' }}>{searchValue.label.toUpperCase()}</h4>
        <section style={{ display: 'flex', justifyContent: 'space-between'}}>
        <Dropdown  defaultValue={searchValue.dropDownValues[0]} id={searchValue.id} name={searchValue.name}  label={searchValue.label}  dropDownvalues={searchValue.dropDownValues} changeHandler={searchHanlder} value={searchValues[searchValue['name']]}  hideLabel={true} style={{width:'30%'}}/>
         To
        <Dropdown id={"to "+searchValue.id} defaultValue={4} name= {"to"+searchValue.name}  label={"to "+searchValue.label}  dropDownvalues={searchValue.dropDownValues} changeHandler={searchHanlder} value={searchValues["to"+searchValue['name']]} style={{width:'30%'}}  hideLabel={true}/>
        </section>
        </>
    )
    
    let autoCompleteSearchValues = (searchValue) =>(
       <>
        <h4 style={{ width: '50%' }}>{searchValue.name.toUpperCase()}</h4>
        <AutoComplete  placeholder={searchValue.placeholder} name={searchValue.name} label={searchValue.label} changeHandler={autoCompletechangeHandler}renderValues={searchValue.renderValues} value={searchValues[searchValue['name']]}/>
       </>
    )

    function submitHandler(event){
        event.preventDefault()
        console.log("we are inside Submit Handler",searchValues)
        Users.search(searchValues).then((res) =>{
            console.log(res)
            alert('succesfully sent search')
        })
    }

    return(
        <form className={styles.formStyle} onSubmit={submitHandler}>
            <h4 style={{ marginLeft:'30%'}}>The Following are the Default Values  plese feel free to change It </h4>
            {serachValues.map((searchValue) =>(
                     <div className={styles.searchValues}>
                       {searchValue.label == 'age' ||  searchValue.label == 'height' ? heightandAge(searchValue) : autoCompleteSearchValues(searchValue) }
                     </div>
                 )
               
            )}
            <CustomButton style={{marginTop:20}} type="submit"> Submit </CustomButton>
        </form>
    )
}

export default Search

