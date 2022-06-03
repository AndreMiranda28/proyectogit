import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import {getCommints} from './Redux/Slices/detalles_git'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const reducers=useSelector((state)=>state.operaciones);
  const dispatch=useDispatch();
  const [pokemon_name,set_pokemon]=useState('pikachu');
  const data= reducers.listcommits.map((item)=><li key={item.name}>{item.name}</li>);
  return (
    <div className="App">

          <div className="col-sm-6 form1">

            <div className="app container formConteiner">
                  <div className="card-body formContenedor">
                    
                  <div className="app container">
                    <div className="card-body">
                      
                      <div className="form-group">
                    
                        <button type="submit" className="btn btn-primary" onClick={()=>{ 
                        dispatch(getCommints({nombre:pokemon_name}))
                        }}>
                        ENVIAR
                        </button>
                      </div>

                      <div>
                        <h3 className="text-black">Resultados</h3>

                        { reducers.loading && < div className="text-warning">Buscando... </div>}
                        
                        {
                          reducers.listcommits.length >=1 &&
                            <div className="text-success">
                              <ul>
                                {data}
                              </ul>
                            </div>
                        }

                        {
                        reducers.error!='' && <span className="text-danger">{reducers.error}</span>
                        }
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
