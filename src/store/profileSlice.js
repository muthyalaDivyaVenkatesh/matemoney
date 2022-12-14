import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Users } from "../config/api/api";

const initialState = {
    profiles: [],
    loading:false,
    isAuth: false,
    fromSearch: false
}

const fetchProfiles = createAsyncThunk(
    'getusers',
    async() =>{
        const response = await Users.getProfiles()
        return response.data
    }
)

const  profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        addPosts: (state,action) =>{
            console.log("wwwwwwwww",action.payload)
            state.profiles = action.payload
        },
        authenticate: (state,action) =>{
            const jwt = localStorage.getItem('jwtToken')
            console.log("iiiiiiiiiiii")
            console.log(jwt, !!jwt)
            state.isAuth = !!jwt
        },
        searchData : (state,action) =>{
            state.fromSearch = true
        }
    },
    extraReducers:{
       [fetchProfiles.pending] : (state) =>{
         state.loading = true
       },
       [fetchProfiles.fulfilled]: (state, {payload} ) =>{
        state.loading = false
        state.profiles = payload
       },
       [fetchProfiles.rejected] : (state) => {
        state.loading = false
       }
    }
})

// export const { fetchprofiles } = profileSlice.actions

export const { addPosts, authenticate, searchData } = profileSlice.actions
export default  profileSlice.reducer
