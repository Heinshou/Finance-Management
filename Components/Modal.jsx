import { useState, useEffect } from 'react'
import React from 'react'
import Mensaje from './Mensaje'
import CerrarBtn from '../src/img/cerrar.svg'

const Modal = ({ 
    guardarGasto,
    setModal,
    animarModal,
    setAnimarModal,
    gastoEditar,
    setGastoEditar
 }) => {

    const [mensaje, setMensaje] = useState('')

    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [categoria, setCategoria] = useState('')
    const [fecha, setFecha] = useState('')
    const [id, setId] = useState('')

    useEffect(() => {
      if(Object.keys(gastoEditar).length > 0){
        setCantidad(gastoEditar.cantidad)
        setCategoria(gastoEditar.categoria)
        setNombre(gastoEditar.nombre)
        setId(gastoEditar.id)
        setFecha(gastoEditar.fecha)
    }
    
    }, [])
    

    const ocultarModal = () => {
        setAnimarModal(false)
        setGastoEditar({})
        setTimeout(() => {

            setModal(false)
        }, 500);
    }

    const handleSubmit = e => {
        e.preventDefault()

        if ([nombre,cantidad,categoria].includes('')){
            setMensaje('Todos los campos son obligatorios')

            setTimeout(() => {
                setMensaje('')
            }, 3000);
         return
        }

        guardarGasto({nombre,cantidad,categoria,id,fecha})
    }

    return (
        <div className='modal'>
            <div className='cerrar-modal'>
                <img
                    src={CerrarBtn}
                    alt='Cerrar modal'
                    onClick={ocultarModal}
                />
            </div>
            <form 
            onSubmit={handleSubmit}
            className={`formulario ${animarModal ? "animar" : 'cerrar'}`}>
                <legend>{gastoEditar.nombre ? 'Editar gasto' : 'Nuevo Gasto'}</legend>

                {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}

                <div className='campo'>
                    <label htmlFor="nombre">Nombre Gasto</label>
                    <input
                        id='nombre'
                        type="text"
                        placeholder='Añade el nombre del Gasto'
                        value={nombre}
                        onChange={ e => setNombre(e.target.value)} />
                </div>

                <div className='campo'>
                    <label htmlFor="cantidad">Cantidad</label>
                    <input
                        id='cantidad'
                        type="number"
                        placeholder='Añade la cantidad del Gasto ej. 300'
                        value={cantidad}
                        onChange={e => setCantidad(Number(e.target.value))}
                         />
                </div>

                <div className='campo'>
                    <label htmlFor="categoria">Categoria</label>
                    <select 
                    value={categoria}
                    onChange={e => setCategoria(e.target.value)}
                    id="categoria">
                        <option value="">-- Seleccione --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="ocio">Ocio</option>
                        <option value="gastos">Gastos Varios</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>
                <input
                    type="submit"
                    value={gastoEditar.nombre ? 'Guardar Cambios' : 'Añadir Gasto'}
                />
            </form>
        </div>
    )
}

export default Modal