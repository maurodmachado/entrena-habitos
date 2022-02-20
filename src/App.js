
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CompraPlan from './componentes/compraplan/CompraPlan';
import CompraPlanError from './componentes/compraplan/CompraPlanError';
import CompraPlanPendiente from './componentes/compraplan/CompraPlanPendiente';
import CompraPlanSuccess from './componentes/compraplan/CompraPlanSuccess';
import Page from './componentes/page/Page';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<Page/>} />
      <Route  path="/comprar" element={<CompraPlan />} />
      <Route  path="/planilla" element={<CompraPlan />} />
      <Route  path="/aprobado" element={<CompraPlanSuccess />} />
      <Route  path="/rechazado" element={<CompraPlanError />} />
      <Route  path="/pendiente" element={<CompraPlanPendiente />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
