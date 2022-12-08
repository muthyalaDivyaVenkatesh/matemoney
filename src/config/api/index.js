import axios from "axios";
import jwt_decode from "jwt-decode";
import { keyForMarried , keyForAutoCompleteDegree, keyForMothertongue } from "../../EditProfile/profile/ProfileConstants";



const apiClient = axios.create({
    // baseURL: "http://localhost:8080",
    baseURL: "https://matmoney-backend.onrender.com"
})

apiClient.interceptors.request.use((request) => {
    console.log(request.url, request.url !== '/login')
   
    if( request.url !== '/login' && request.url !== '/signin'){
        console.log("we are entering into the url")
        const jwt = localStorage.getItem('jwtToken')
        const decoded = jwt_decode(jwt)
        console.log(request.method)
        if(localStorage.getItem('jwtToken')&&request.method != 'get'){
        request.data["id"] = decoded.id
        console.log("jks")
        console.log("hiiiiiiiii",process.env.BACKEND_END_POINT)
        }
    }
    return ({
        ...request,

    })
},
    error => Promise.reject(error)
)


apiClient.interceptors.response.use((response) => {
    console.log(response?.data?.profile)
    if(response?.data?.profile?.profileDetails){
        if(response.data.profile.profileDetails?.marriedStatus == 0 || response.data.profile.profileDetails?.marriedStatus)
            response.data.profile.profileDetails.marriedStatus  = keyForMarried[response.data.profile.profileDetails.marriedStatus]
        if(response.data.profile.profileDetails?.motherTongue == 0 || response.data.profile.profileDetails?.motherTongue)
            response.data.profile.profileDetails.motherTongue  = keyForMothertongue[response.data.profile.profileDetails.motherTongue] 
        if(response.data.profile.profileDetails?.education == 0 || response.data.profile.profileDetails?.education )
            response.data.profile.profileDetails.education  = keyForAutoCompleteDegree[response.data.profile.profileDetails.education]
       
    }
    return ({
        ...response
    })

},
    async (error) => {
        console.log(error)
        return Promise.reject(error.response?.data);
    },
);


const { get, post, put, delete: destroy} = apiClient;
export {get, post,put, destroy}