import React from 'react';
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

import { letraMayuscula } from '../helpers/helper';

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838f;
    color: #fff;
    margin-top: 1rem;
`

const Resumen = ({datos}) => {

    if (datos.marca === '' || datos.year === '' || datos.plan === '' ) {
        return null
    }

    return ( 
        <ContenedorResumen>
            <h2>Resumen de cotizacion</h2>
            <ul>
                <li>Marca: {letraMayuscula(datos.marca)}</li>
                <li>Plan: {letraMayuscula(datos.plan)}</li>
                <li>Año: {datos.year}</li>
            </ul>
        </ContenedorResumen>


    );
}

Resumen.propTypes = {
    datos: PropTypes.object.isRequired,
}
 
export default Resumen;