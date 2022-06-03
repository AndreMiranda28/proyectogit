
//MEJORAS CON LA NUEVA FORMA DE USAR REDUX
import operaciones from "./Slices/detalles_git";
import { configureStore } from '@reduxjs/toolkit'

//CONFIGURANDO LOS REDUCERS
const listaReducers={
  operaciones  
};

//CONFIGURANDO STORE
const store=configureStore({
  reducer:listaReducers
})

export default store;