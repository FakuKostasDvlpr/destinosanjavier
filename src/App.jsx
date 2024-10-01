import './App.css';
import Hero from './components/Hero';
import Vinilo from './components/Vinilo';
import db from './data/db'; // Importa la data desde el archivo vinyls.js

function App() {
  return (
    <>
      <Hero />
      <div>
        {/* Mapea sobre el array de vinilos para renderizar múltiples componentes Vinilo */}
        {db.map((vinyl) => (
          <Vinilo
            key={vinyl.id}
            title={vinyl.title}
            year={vinyl.year}
            imageUrl={vinyl.imageUrl}
            description={vinyl.description}
            leftText={vinyl.leftText}
            backgroundColor={vinyl.viniloColor} // Aquí está la corrección
          />
        ))}
      </div>
    </>
  );
}

export default App;
