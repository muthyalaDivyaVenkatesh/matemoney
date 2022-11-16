import { useState } from "react";
import serachValues from "../constants/searchConstants";
import { AutoComplete, Dropdown } from "../ui/Input"
import  CustomButton  from "../ui/CustomButton"

// search
function Search(){
    let [searchValues,setAge] = useState({
        age: '',
        height: '',
        marriedStatus: [],
        motherTongue: [],
        religion: [],
        education: []

    })
    
    let searchHanlder = (e) => {

    } 
    
    let heightandAge =  (searchValue) => (
        <>
        <h4 style={{ width: '50%' }}>{searchValue.label.toUpperCase()}</h4>
        <section style={{ display: 'flex', justifyContent: 'space-between'}}>
        <Dropdown id={searchValue.id} name={searchValue.name}  label={searchValue.label}  dropDownvalues={searchValue.dropDownValues} changeHandler={searchHanlder} value={searchValues.age}  hideLabel={true} style={{width:'30%'}}/>
         To
        <Dropdown id={"to "+searchValue.id} name= {"to "+searchValue.name}  label={"to "+searchValue.label}  dropDownvalues={searchValue.dropDownValues} changeHandler={searchHanlder} value={searchValues.age} style={{width:'30%'}}  hideLabel={true}/>
        </section>
        </>
    )
    
    let autoCompleteSearchValues = (searchValue) =>(
       <>
        <h4 style={{ width: '50%' }}>{searchValue.label.toUpperCase()}</h4>
        <AutoComplete  placeholder={searchValue.placeholder} label={searchValue.label} renderValues={searchValue.renderValues} value={searchValues.marriedStatus}/>
       </>
    )

    function submitHandler(event){
        event.preventDefault()
        console.log("we are inside Submit Handler")
    }

    return(
        <form style={{ marginTop:50, marginLeft: 50}} onSubmit={submitHandler}>
            {serachValues.map((searchValue) =>(
                     <div style={{  display:"flex",flexDirection: 'row', width:'70%',  height:'12vh'}}>
                       {searchValue.label == 'age' ||  searchValue.label == 'height' ? heightandAge(searchValue) : autoCompleteSearchValues(searchValue) }
                     </div>
                 )
               
            )}
            <CustomButton type="submit"> Submit </CustomButton>
        </form>
    )
}

export default Search


{/* <span>AGE</span>            
<section style={{ flexDirection: 'column'}}>   
<Dropdown id="age" name="age" label="Age" value={age} dropDownvalues={ageValues}  changeHandler={searchHanlder} style={{width:'20%'}} />
 to
<Dropdown id="age" name="age" label="Age" value={age} dropDownvalues={ageValues}  changeHandler={searchHanlder} style={{width:'10%'}} /> 
</section>   */}