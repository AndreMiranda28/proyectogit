import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {comprarPokemon,regresarPokemon,getPokemon, handleChangeMontoApertura} from './Redux/Slices/detalles_git'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function App() {

  const reducers=useSelector((state)=>state.operaciones);
  const dispatch=useDispatch();
  const [pokemon_name,set_pokemon]=useState('pikachu');

  return (
    <div className="App">
      <header className="App-header">
      
       
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Reac
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
          <div className="col-sm-6 form1">

            <div className="app container formConteiner">
                  <div className="card-body formContenedor">
                    


                  <div className="app container">
                    <div className="card-body">

                      <h1>{reducers.pokemon}</h1>
                
                      <Button variant="success" onClick={()=>{
                        dispatch(comprarPokemon(1));
                      }}>Registrar</Button>{' '}

                      <Button variant="success" onClick={()=>{dispatch(regresarPokemon(1))}}
                      >Devolver</Button>{' '}


                      <div className="form-group">
                        <label htmlFor="buscar:pokemon" className="text-white">Buscar pokemon</label>
                        <input type="text" className="form-control" id="buscar_pokemon"
                        value={pokemon_name} onChange={(event)=>{        
                        set_pokemon(event.target.value);
                        }}/>
                        <button type="submit" className="btn btn-primary" onClick={()=>{ 
                        dispatch(getPokemon({nombre:pokemon_name}))
                        }}>
                        ENVIAR
                        </button>
                      </div>

                      <div>
                        <h3 className="text-white">Resultados</h3>

                        { reducers.loading && < div className="text-warning">Buscando... </div>}
                        
                        {
                          reducers.pokemonLista.length >=1 &&
                        <div className="text-success">
                        <img src={reducers.pokemonLista[0].sprites.front_default} alt=""></img>

                        <span>{reducers.pokemonLista[0].name}</span>
                        <h2>Habilidades</h2>  
                        {reducers.pokemonLista[0].abilities[0].ability[0]}


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
