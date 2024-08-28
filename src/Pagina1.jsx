import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import App from './App'

function Pagina1() {
  const[numero,setNumero]=useState('')

  function cambiarnumero(evento){
    setNumero(evento.target.value)
  }
  return (
    <>
      
        <h3>Calculadora <a href="#">JesBol.Inc</a></h3>
        <p>Haz algun calculo para ver el resultado.</p>
        <input type="text" name="ans" onChange={cambiarnumero}></input>
        <br></br>
        <input type="button" value="1" onClick="document.calculator.ans.value+='1'"></input>
        <input type="button" value="2" onClick="document.calculator.ans.value+='2'"></input>
        <input type="button" value="3" onClick="document.calculator.ans.value+='3'"></input>
        <input type="button" value="+" onClick="document.calculator.ans.value+='+'"></input>
        <br></br>
        <input type="button" value="5" onClick="document.calculator.ans.value+='5'"></input>
        <input type="button" value="6" onClick="document.calculator.ans.value+='6'"></input>
        <input type="button" value="7" onClick="document.calculator.ans.value+='7'"></input>
        <input type="button" value="-" onClick="document.calculator.ans.value+='-'"></input>
        <br></br>
        <input type="button" value="8" onClick="document.calculator.ans.value+='8'"></input>
        <input type="button" value="9" onClick="document.calculator.ans.value+='9'"></input>
        <input type="button" value="0" onClick="document.calculator.ans.value+='0'"></input>
        <input type="button" value="*" onClick="document.calculator.ans.value+='*'"></input>
    </>
  )

}

export default Pagina1
