import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pagina1 from './pagina1'

function App() {
  const[usuario, setUsuario] = useState('')
  const[clave, setClave] = useState('')
  const[logueado, setLogueado] = useState(false)

  function cambiarusuario(evento){
    setUsuario(evento.target.value)
  }
  function cambiarclave(evento){
    setClave(evento.target.value)
  }

  async function Ingresar(){
    const peticion = await fetch('http://localhost:3000/login?usuario='+usuario+'&clave='+clave)
    if (peticion.ok) {
      
      alert(" sesion iniciada....")
      setLogueado(true)
    } else {
      alert("...sesion no iniciada")
    }
    
/*
      if (usuario=='admin' && clave=='admin') {
        setLogueado(true)
      }else{
        alert(" sesion no iniciada....")
      }     
 */       
  }
if (logueado) {
    return (<Pagina1 />)
}
  return (
    
      <>
        <h1>Inicio de Sesion</h1>
        
        <input type = "textfield" name= "usuario" id="usuario" value={usuario} onChange={cambiarusuario}/>
        <br></br>
        <input type = "textfield" name='clave' id='clave' value={clave} onChange={cambiarclave}/>
        <br></br>
        <input type="button" name="ingresar" value="Ingresar" onClick={Ingresar} />
        
        <h1>Registro</h1>
        
        <input type = "textfield" name= "usuario" id="usuario" value={usuario} onChange={cambiarusuario}/>
        <br></br>
        <input type = "textfield" name='clave' id='clave' value={clave} onChange={cambiarclave}/>
        <br></br>
        <input type="button" name="ingresar" value="Ingresar" onClick={Ingresar} />
        
     </>
  )
}

export default App
