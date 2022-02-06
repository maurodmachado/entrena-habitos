
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CompraPlan from './componentes/compraplan/CompraPlan';
import Navbar from './componentes/navbar/Navbar';
import Page from './componentes/page/Page';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route  path="/" element={<Page/>} />
      <Route  path="/comprar/:id" element={<CompraPlan />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
