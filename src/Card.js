import React from 'react';

function Card({nombre,materia}) {
    return (
      <div className='Card'>
        <p>Hola {nombre}</p>
        <p>Tu materia favorita es {materia}</p>
      </div>
    );
  }

export default Card;