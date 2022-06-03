
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import Axios from "axios";

const initialState = {    
    loading:false,
    listcommits:[],
    error:'' 
}; 

//ASINCRONO
export const getCommints=createAsyncThunk(
    "operaciones/getCommints",
    async ({nombre},{dispatch,state}) => {

       const response=await  Axios.get("https://api.github.com/users/AndreMiranda28/repos")
       //console.log(response.data);
       return response.data 

    }
)

//CREANDO LAS ACCIONES
export const operacionesSlice = createSlice({
    name: 'operaciones',
    initialState,
    reducers: {

    },
    extraReducers: {
        [getCommints.pending]:(state,action) => {
            state.loading=true

        },
        [getCommints.fulfilled]:(state,action) => { 
            state.listcommits=action.payload,
            state.loading=false
        },
        [getCommints.rejected]:(state,action) => {
            state.loading=false
            state.error="Try again, please"
            state.listcommits=[]

        },

    }
  })

  export const  {} =operacionesSlice.actions;
  export default operacionesSlice.reducer