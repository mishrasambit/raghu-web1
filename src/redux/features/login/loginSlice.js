import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    userData: undefined,
    loading: false,
    error: undefined
}

const makeApiCall = async (url, body, token)=>{
    return new Promise((resolve, reject) => {
        if(body.username==='sambit') {
            setTimeout(
                ()=>{resolve({username: body.username, otherdata : 'logged-in'})}
            , 3000)
        }
        else{
            setTimeout(
                ()=>{reject({message:"Please check username and password"})}
            , 5000)
        } 
    })
}

export const signinApi = createAsyncThunk(
    'signin',
    async (body)=>{
        const result = await makeApiCall('http://localhost:8080/authenticate', body);
        return result;
    }
)

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
      authenticate: (state, action) => {
        
      },
      logout: (state) => {
        state.userData = undefined;
        state.loading = false;
        state.error = undefined;

      }
    },
    extraReducers:{
        [signinApi.fulfilled]:(state, action)=>{
            state.loading=false
            if(action.payload.message){
                state.error=action.payload.message
                state.userData=undefined
            }else if(action.payload){
                state.userData=action.payload
                state.error=undefined
                localStorage.setItem('username', action.payload.username)
                localStorage.setItem('otherdata', action.payload.otherdata)
            }
        },
        [signinApi.pending]:(state, action)=>{
            state.loading=true
            state.error=undefined
            state.userData=undefined
        },
        [signinApi.rejected]:(state, action)=>{
            state.loading=false
            state.error=action.error.message
            state.userData=undefined
        },
    }
  })
  
export const { authenticate, logout } = loginSlice.actions
  
export default loginSlice.reducer