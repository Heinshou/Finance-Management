import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({
    gastos,
    setGastoEditar,
    eliminarGasto,
    gastosFiltrados,
    filtro
}) => {
  return (
    <div className='listado-gastos contenedor'>
       
        {   filtro ? (
                <>
                 <h2>{gastosFiltrados.length ? 'Gastos' : 'No hay gastos en esta categoria'}</h2>
                {gastosFiltrados.map( gasto => (
                    <Gasto
                    key={gasto.id}
                    gasto={gasto}
                    setGastoEditar={setGastoEditar}
                    eliminarGasto={eliminarGasto}
                    />
                ))}
                </>
            ) :  (
                <>
                 <h2>{gastos.length ? 'Gastos' : 'No hay gastos aún'}</h2>
                   { gastos.map( gasto => (
                    <Gasto
                        gasto={gasto}
                        key={gasto.id}
                        setGastoEditar={setGastoEditar}
                        eliminarGasto = {eliminarGasto}
                    />
                )) }
                </>
            ) 
        }
    </div>
  )
}

export default ListadoGastos