import { useState,useEffect } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import {getCommints} from './Redux/Slices/detalles_git'
import 'bootstrap/dist/css/bootstrap.min.css';
import { formatoFecha} from './Redux/validations';

function App() {

  const reducers=useSelector((state)=>state.operaciones);
  const dispatch=useDispatch();
  const [pokemon_name,set_pokemon]=useState('pikachu');
  const data= reducers.listcommits.map((item)=><td>{item.name}</td>);

  useEffect(() => {
    dispatch(getCommints({nombre:pokemon_name}))
  });

  return (
    <div className="App">

          <div className="col-sm-6 form1">

            <div className="app container formConteiner">
                  <div className="card-body formContenedor">               
                  <div className="app container">
                    <div className="card-body">                  
                      <div className="form-group">          
                      <h1>REGISTRO DE COMMITS</h1>   
                      </div>

                      <div>
                      
                      <table className="table table-hover table-bordered table-responsive-xl PDFCalendarioTable" id="calendario">
                            <thead>
                                <tr className="table-active colorBordeTabla">
                                    <th scope="col">ID</th>
                                    <th scope="col">Author</th>
                                    <th scope="col">Fecha</th>
                                    <th scope="col">Comentario</th>
                                </tr>
                            </thead>
                            <tbody>
                             {reducers.listcommits.map(item=>
                             <tr>
                               <td>{item.commit.author.name}</td>
                               <td>{item.commit.author.name}</td>
                               <td>{formatoFecha(item.commit.author.date)}</td>
                               <td>{item.commit.message}</td>

                               </tr>)}

                            </tbody>
                        </table> 
                      
                        </div>
                    </div>
                </div>



                </div>
            </div> 


    
            
          </div> 

    </div>
  )
}

export default App
