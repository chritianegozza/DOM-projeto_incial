// funçao anonima com arrow functions para não aparcer a regra de negocio no console 
// por isso a importancia de tirar do escopo global
//( () => {  })()
import {handleNovoItem} from './componentes/criaTarefa.js'
import {carregaTarefa} from './componentes/carregaTarefa.js'
const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', handleNovoItem)

carregaTarefa()




