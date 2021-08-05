import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Usuario = () => {

    console.log(useParams())
    const {id} = useParams()

    const [usuario, setUsuario] = useState([])

    useEffect(() => {
        getCivilization()
    }, [])

    const getCivilization = async () => {
        const response = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`)
        const data = await response.json()
        console.log(data)
        setUsuario(data)
    }

    return (
        <div>
            <h3>{usuario.name}</h3>
            <p>{usuario.expansion}</p>
        </div>
    )
}

export default Usuario
