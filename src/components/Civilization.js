import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const Civilization = () => {

    const [pueblo, setPueblo] = useState([])

    useEffect(() => {
        getCivilization()
    }, [])

    const getCivilization = async () => {
        const response = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
        const data = await response.json()
        setPueblo(data.civilizations)
    }
    

    return (
        <div>
            <h1>Civilization</h1>
            <ul>
                {
                    pueblo.map((item) => (
                        <li key={item.id}>
                            <Link to={`/civilization/${item.id}`}>
                                Name: {item.name} | Expansion: {item.expansion}
                            </Link>
                        </li> 
                    ))
                }
            </ul>
        </div>
    )
}

export default Civilization;
