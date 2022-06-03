//import {combineReducers,createStore,applyMiddleware} from "redux";
//import { composeWithDevTools } from '@redux-devtools/extension';
//import thunk from "redux-thunk";
//MEJORAS CON LA NUEVA FORMA DE USAR REDUX
import operaciones from "./Slices/detalles_git";
import { configureStore } from '@reduxjs/toolkit'


const listaReducers={
  operaciones  
};
const store=configureStore({
  reducer:listaReducers
})

//const rootReducers=combineReducers({
//    reducers  
//});
//FORMA ANTIGUA DE REALIZAR LA CREACIÓN DEL STORE
//const store=createStore(rootReducers, composeWithDevTools(
//   applyMiddleware(thunk)
//)
//  );

export default store;