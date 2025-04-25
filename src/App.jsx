import { useState } from 'react';
import logosena from './assets/sena.png';
import './App.css';
import Saludo from './componente/saludo'; // Asegúrate que esta ruta esté bien (componente en minúscula)

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {/* Mostrar el logo */}
        <img src={logosena} alt="Logo SENA" className="logo" />

        <h1>mi primera app</h1>

        {/* Incluir el saludo */}
        <Saludo nombre="jose Avila" dia="Martes" />

        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            + sumar
          </button>
          <button onClick={() => setCount((count) => count - 1)}>
            - restar
          </button>
          <p>
            Valor actual: <strong>{count}</strong>
          </p>
          <p>
            Edita <code>src/App.jsx</code> y guarda para probar HMR
          </p>
        </div>

        <p className="read-the-docs">
          Haz clic en los logos de Vite y React para saber más
        </p>
      </div>
    </>
  );
}

// Asegúrate de que esta línea esté al final del archivo, fuera de cualquier función
export default App;
