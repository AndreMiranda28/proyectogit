import { useState,useEffect } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import {getCommints} from './Redux/Slices/detalles_git'
import 'bootstrap/dist/css/bootstrap.min.css';
import { formatoFecha} from './Redux/validations';

function App() {

  const reducers=useSelector((state)=>state.operaciones);
  const dispatch=useDispatch();
  const [valor,set_valor]=useState(1);

  useEffect(() => {
    if (valor==1) {
       dispatch(getCommints({nombre:""}));
       set_valor(0);
    }
  });

  
  return (
    <div className="App">
          <div className="col-sm-12 form1">

            <div className="app container formConteiner">
                    <div className="card-body">                  
                      <div className="form-group">          
                      <h1>REGISTRO DE COMMITS</h1>   
                      </div>

                      <div>
                      
                      <table className="table table-hover table-bordered table-responsive-xl ">
                            <thead>
                                <tr className="table-active colorBordeTabla">
                                    <th scope="col">ID</th>
                                    <th scope="col">Autor Name</th>
                                    <th scope="col">Author Login</th>
                                    <th scope="col">Fecha</th>
                                    <th scope="col">Comentario</th>
                                </tr>
                            </thead>
                            <tbody>
                             {reducers.listcommits.map(item=>
                             <tr key={item.sha}>
                               <td>{item.sha}</td>
                               <td>{item.commit.author.name}</td>
                               <td>{item.author.login}</td>

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
  )
}

export default App
