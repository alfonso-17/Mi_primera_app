import { useState } from 'react';
import logosena from './assets/sena.png';
import Saludo from './componente/saludo';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full mx-auto text-center space-y-6">
        <div className="flex justify-center">
          <img 
            src={logosena} 
            alt="Logo SENA" 
            className="h-32 md:h-40 transition-all duration-300 hover:drop-shadow-[0_0_2em_#0eff01aa]" 
          />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold">mi primera app</h1>

        <Saludo nombre="Jose Alfonso Avila" dia="Martes" />

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="flex justify-center space-x-4 mb-4">
            <button 
              onClick={() => setCount(count + 1)}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
            >
              + sumar
            </button>
            <button 
              onClick={() => setCount(count - 1)}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md transition-colors"
            >
              - restar
            </button>
          </div>
          <p className="text-lg">
            Valor actual: <strong className="font-bold">{count}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;