// App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Tabs from './components/Tabs';
import SafetyGuide from './components/SafetyGuide'
import MapTab from './components/MapTab'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Tabs>
        <div label="Mapa">
          <MapTab />
        </div>
        <div lable="Predicciones"></div>
        <div label="Líneas de Ayuda"></div>
        <div label="Grabación de Audio"> </div>
        <div label="Simulación de Llamadas"></div>
        <div label="Guía de Seguridad"> {/* Nueva pestaña */}
          <SafetyGuide />
        </div>
      </Tabs>
    </div>
  );
}

export default App;
