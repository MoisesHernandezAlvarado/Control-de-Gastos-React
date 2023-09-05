import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'

const Header = ({
  //props
  gastos,
  setGastos,
  presupuesto,
  setPresupuesto, 
  isValidPresupuesto,
  setIsValidPresupuesto
}) => {
  return (
    <header>
        <h1> Moises  de gastos</h1>


        { isValidPresupuesto ?(
         <ControlPresupuesto 
         setIsValidPresupuesto={setIsValidPresupuesto}
         setGastos={setGastos}
         gastos={gastos}
         setPresupuesto={setPresupuesto}
          presupuesto={presupuesto}
         
         />
        ):(
          <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
          />
        )}

        

    </header>
  )
}

export default Header