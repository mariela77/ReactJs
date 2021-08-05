import { useState } from 'react';

function Form() {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");

    const BorrarCampos = () => {
        setName("");
        setLastName("");
        setAge("")
    }

    return (
        <div>
            <div>
                <label>Nombre</label>
                <input type="text" name="name" value={name} onChange={(evt) => setName(evt.target.value)} />
            </div>
            <div>
                <label>Apellido</label>
                <input type="text" name="lastname" value={lastName} onChange={(evt) => setLastName(evt.target.value)} />
            </div>
            <div>
                <label>Edad</label>
                <input type="number" name="age" value={age} onChange={(evt) => setAge(evt.target.value)} />
            </div>
            <div>
                <p>El nombre es: {name}</p>
                <p>El apellido es: {lastName}</p>
                <p>La edad es : {age}</p>

            </div>
            <button onClick={BorrarCampos}>Borrar campos</button>
        </div>

    )
}

export default Form;