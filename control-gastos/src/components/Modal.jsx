import React from 'react'
import CerrarBtn from '../img/cerrar.svg'
import { useState, useEffect } from 'react'
import Mensaje from './Mensaje'

const Modal = ({setModal,animarModal,setAnimarModal,guardarGasto,gastoEditar,setGastoEditar}) => {

  const [mensaje, setMensaje] =useState('')
  const [nombre,setNombre] = useState('')
  const [cantidad,setCantidad] = useState('')
  const [categoria,setCategoria] = useState('')
  const [fecha, setFecha] = useState('')
  const [id,setId] = useState('')
   
  useEffect(()=>{
    if(Object.keys(gastoEditar).length>0){
      setNombre(gastoEditar.nombre)
      setCantidad(gastoEditar.cantidad)
      setCategoria(gastoEditar.categoria)
      setId(gastoEditar.id)
      setFecha(gastoEditar.fecha)
    }
}, [])
  
  
  
  const ocultarModal=()=>{
    setAnimarModal(false)
    setGastoEditar({})
    setTimeout(()=>{
      setModal(false)
    },500)
    }
    
    const handleSubmit = e =>{
      e.preventDefault()

      if([nombre, cantidad, categoria].includes('')){
        setMensaje('todos los campos son obligatorios')

        setTimeout(()=>{
          setMensaje('')
        },3000)
        return;
      }

      guardarGasto({nombre, cantidad, categoria,id,fecha})
    }
    
    
  return (
    <div className='modal'>
        <div className='cerrar-modal'>
            <img src={CerrarBtn}
            alt='cerrar modal'
            onClick={ocultarModal}/>
        </div>
        <form className={`formulario ${animarModal?"animar" : 'cerrar '}`}
        onSubmit={handleSubmit}
        >
              <legend>{gastoEditar.nombre ? (gastoEditar.nombre+ " ✏️"): 'Nuevo gasto'}</legend>
              {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
              <div className='campo'>
                <label htmlFor='nombre'>Nombre Gasto</label>

                <input id="nombre" 
                type='text' 
                placeholder='Añade el Nombre del Gasto' 
                value={nombre} onChange={e => setNombre(e.target.value)}/>
              </div>

              <div className='campo'>
                <label htmlFor='nombre'>Cantidad</label>

                <input id="cantidad" 
                type='number' 
                placeholder='Añade la cantidad del gasto Ej:300'
                value={cantidad} 
                onChange={e => setCantidad(Number(e.target.value))}/>
              </div>

              <div className='campo'>
                <label htmlFor='nombre'>Categoria</label>
                <select id='categotia' value={categoria} onChange={e => setCategoria(e.target.value)}>
                  <option value="">---Seleccione---</option>
                  <option value="ahorro">Ahorro</option>
                  <option value="comida">Comida</option>
                  <option value="casa">Casa</option>
                  <option value="gastos">Gastos Varios</option>
                  <option value="ocio">Ocio</option>
                  <option value="salud">salud</option>
                  <option value="suscripciones">suscripciones</option>
                </select>
              </div>

              <input type='submit' value={gastoEditar.nombre ? ("Save gasto 👍🏻"): 'Añadir gasto✅'}/>
         </form>
    </div>
  )
}

export default Modal