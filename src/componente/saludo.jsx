import React from 'react';

function Saludo(props) {
  return (
    <>
      <h1>¡Hola, {props.nombre}!</h1>
      <h1>¡Hoy es, {props.dia}!</h1>
    </>
  );
}

export default Saludo;
