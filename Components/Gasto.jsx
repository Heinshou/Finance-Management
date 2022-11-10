import React from 'react'
import { formatearFecha } from '../src/helpers';
import IconoAhorro from '../src/img/icono_ahorro.svg'
import IconoCasa from '../src/img/icono_casa.svg'
import IconoComida from '../src/img/icono_comida.svg'
import IconoGastos from '../src/img/icono_gastos.svg'
import IconoOcio from '../src/img/icono_ocio.svg'
import IconoSalud from '../src/img/icono_salud.svg'
import IconoSuscripciones from '../src/img/icono_suscripciones.svg'

const diccionarioIconos = {
  ahorro : IconoAhorro,
  comida : IconoCasa,
  casa : IconoComida,
  gastos : IconoGastos,
  salud : IconoSalud,
  ocio : IconoOcio,
  suscripciones : IconoSuscripciones
}


const Gasto = ({gasto}) => {
const {categoria,nombre,cantidad,id,fecha} = gasto;

  return (
    <div className='gasto sombre'>
        <div className='contenido-gasto'>
            <div className="descripcion-gasto">
                <img
                    src={diccionarioIconos[categoria]}
                    alt='Imagen Gasto'
                />
                <p className='categoria'>{categoria}</p>
                <p className='nombre-gasto'>{nombre}</p>
                <p className="fecha-gasto">
                    Agregando el: {''}
                    <span>{formatearFecha(fecha)}</span>
                </p>
            </div>
        </div>
        <div className="cantidad-gasto">${cantidad}</div>
    </div>
  )
}

export default Gasto