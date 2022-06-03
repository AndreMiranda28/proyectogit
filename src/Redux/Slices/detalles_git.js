
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import Axios from "axios";

//USANDO LA METODOLOGÍA ACTUALIZADA DE REDUX 2022
//ESTADO INICIAL
const initialState = {    
    pokemon:300,
    cuenta:0,
    loading:false,
    pokemonLista:[],
    pokemonHabilidades:0,
    montoDeposito:0,
    error:'' 
}; 

export const getPokemon=createAsyncThunk(
    "operaciones/getPokemon",
    async ({nombre},{dispatch,state}) => {
        //console.log(dispatch)
        //console.log(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
       const response=await  Axios.get(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
       dispatch(getPokemonHabilidades(2))

       return [response.data] //porque es un array por eso le pongo []
       // return fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`).then((res)=>
         //  res.json()
       // )
    }
)
export const recibodata=(valor,data)=>{
    var data1=data;

    createAsyncThunk(
        
    )


}
export const handleChangeMontoApertura=createAsyncThunk(
    "operaciones/handleChangeMontoApertura",
    async (payload,{dispatch,getState}) => {   
      //console.log(getState)
        //console.log(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
       //const response=await  Axios.get(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
       dispatch(comprarPokemon(3));
       dispatch(regresarPokemon(1));

       //dispatch(obtenerdata(state.pokemon))
       //console.log(getState);    
       //let data=initialState
      // data={...data,error:"jiji"};
       //console.log(initialState.pokemon);
       // console.log("Estas dentro del handle")
       return payload//porque es un array por eso le pongo []
       // return fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`).then((res)=>
         //  res.json()
       // )
    }
)
export const obtenerdata=createAsyncThunk(
    "operaciones/obtenerdata",
    async (payload,{dispatch,getState}) => {   
      //console.log(getState)
        //console.log(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
       //const response=await  Axios.get(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
       //console.log(payload);    
       console.log(payload);
       // console.log("Estas dentro del handle")
       return payload//porque es un array por eso le pongo []
       // return fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`).then((res)=>
         //  res.json()
       // )
    }
)

//CREANDO LAS ACCIONES
export const operacionesSlice = createSlice({
    name: 'operaciones',
    initialState,
    reducers: {
        comprarPokemon: (state,action) => {
        state.pokemon += action.payload
        console.log(state.pokemon)
        //state.cuenta+=1
        },
        regresarPokemon: (state) => {
        state.pokemon -= 1
        },
        getPokemonHabilidades: (state,action) => {
        state.pokemonHabilidades += action.payload
        }
        
    },
    extraReducers: {
        [getPokemon.pending]:(state,action) => {
            state.loading=true

        },
        [getPokemon.fulfilled]:(state,action) => { 
            state.pokemonLista=action.payload,
            state.loading=false
        },
        [getPokemon.rejected]:(state,action) => {
            state.loading=false
            state.error="No se pudo cargar la data"
            state.pokemonLista=[]

        },
        [handleChangeMontoApertura.pending]:(state,action) => {
            state.loading=true

        },
        [handleChangeMontoApertura.fulfilled]:(state,action) => { 
            //state.pokemon=action.payload,
            state.loading=false
        },

    }
  })

  export const  {comprarPokemon,regresarPokemon,getPokemonHabilidades} =operacionesSlice.actions;
  export default operacionesSlice.reducer