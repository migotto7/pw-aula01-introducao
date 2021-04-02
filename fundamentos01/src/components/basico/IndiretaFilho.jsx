import React, { useState } from 'react';

export default props => {
    const [nome, setNome] = useState('bartholomew jojo Simpson')

    return(
        <div>
            <button onClick={() =>{
                props.quandoClicar(nome)
            }} >
                fornecer informações do aluno
            </button>
        </div>
    )
}