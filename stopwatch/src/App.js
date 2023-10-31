import './App.css';
import Botao from './components/botoes/Botao';
import Contador from './components/contador/contador';
import { useState } from 'react';


function App() {
  const [ligado, setLigado] = useState(false);
  const [miliSegundos, setMiliSegundos] = useState(0);
  const [segundos, setSegundos] = useState(0);
  const [minutos, setMinutos] = useState(0);

  if (ligado){
    setTimeout(() => {
      milis();
    }, 1);
  }

  function milis(){
    setMiliSegundos(miliSegundos + 1);
    if(miliSegundos > 999){
      setMiliSegundos(0);
      setSegundos(segundos + 1);
    }
    if (segundos > 59){
      setSegundos(0);
      setMinutos(minutos + 1);
    }
  }

  function reset(){
    setSegundos(0); 
    setMiliSegundos(0);
    setMinutos(0);
  }

  function pause(){
    if (ligado){
      setLigado(false)
    } 
    else if(!ligado) {
      if (milis > 1){
        setLigado(true)
      }
    }
  }

  return (
    <div className="cronometro">
      
        <div className="title">
            <h1>Stop<span>Watch</span></h1>
        </div>

        <div className="contador">
          <Contador 
            min={minutos}
            seg={segundos}
            mil={miliSegundos}
          />
        </div>


        <div className='btns'>
          <Botao cor='start' nome='start' onClick={() => setLigado(true)}/>
          <Botao cor='pause' nome='pause' onClick={() => pause()}/>
          <Botao cor='reset' nome='reset' onClick={() => {setLigado(false);setTimeout(() => {reset()}, 100)}}/>
        </div>

    </div>
  );
}

export default App;
