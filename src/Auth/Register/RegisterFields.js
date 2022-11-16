import { motherTounge, profileCreatedFor, Gender, Location } from "../../constants/DropDownvalues"



function formFields({userForm, registerFormHandle}) {
    const profileFor = { id: "profileFor", name:"profileFor", value: userForm?.profileFor, label: "Profile created For", dropDownvalues: profileCreatedFor  }
    const  gender = { id: "gender", name:"gender", value: userForm?.gender,  label: "gender", dropDownvalues: Gender  }
    const mother_Tongue = { id: "motherTongue", name:"motherTongue", value: userForm?.motherTongue,  label: "MotherTongue", dropDownvalues: motherTounge  }
    const region = { id: "region", name:"region", value: userForm?.region,  label: "region", dropDownvalues: Location  }
    return [profileFor,gender, mother_Tongue, region ]
}

export default formFields