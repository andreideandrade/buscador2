import { useState } from 'react';
import { FiSearch } from 'react-icons/fi'
import api from './api';
import './styles.css'

function App() {

  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

  async function handleSearch(){
    //alert("Valor do input -> " + input)

    if (input === ''){
      alert("Digite algum CEP!")
      return
    }

    try{
      const response = await api.get(`${input}/json`)
      setCep(response.data)
      setInput('')
      console.log(response.data)
    }catch{
      alert("Ops, Não conseguimos buscar este numero de CEP!")
      setInput('')
    }

  }

  return (

    <div className="container">

      <h1 className="title">Buscador de CEP</h1>

      <div className="containerInput">

        <input 
          value={input}
          onChange={ (e) => setInput(e.target.value) }
          type="text"
          placeholder="Digite seu CEP..."
        />

        <button className="buttonSearch"  onClick={handleSearch}>
          <FiSearch size={25} color="#FFF" />        
        </button>
        </div>

        {Object.keys(cep).length > 0 && (

          <main className='main'>

            <h2>CEP: {cep.cep}</h2>

            <span>Logradouro: {cep.logradouro}</span>
            <span>Complemento: {cep.complemento}</span>
            <span>Bairro: {cep.bairro}</span>
            <span>Cidade: {cep.localidade} - {cep.uf}</span>
            <span>DDD: {cep.ddd}</span>

          </main>
        )}

    </div>
  );
}

export default App;

/** 
 * 01310930 
 * 22050900
 * 
*/

/**
 *  Complementos
 *
 *  npm install axios
 *  npm install react-icons  
 */



  
  