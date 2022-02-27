import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CompraPlan from './componentes/compraplan/CompraPlan';
import CompraPlanError from './componentes/compraplan/CompraPlanError';
import CompraPlanPendiente from './componentes/compraplan/CompraPlanPendiente';
import CompraPlanSuccess from './componentes/compraplan/CompraPlanSuccess';
import Page from './componentes/page/Page';

function App() {
  const informacion = {
    infoNosotros: "Mi nombre es Luquitaz Gomez y soy Licenciado en Zanjas, N° de matrícula 0303456. Me recibí en Altamirano (Saliendo por la ruta 9) y luego realicé un curso de antropometría ISAK, un curso anual de Técnico en Empuje y soy amante del entrenamiento y el aporte de nutrientes de forma constante.\nDesde el año 2008 hasta el día de hoy en el 2022, me he dedicado a realizar planes de alimentación deportiva,\ndonde pude observar los resultados en mi propio cuerpo y en miles de personas. Desarrolle un sistema de planes\nde alimentación a distancia, donde miles de personas aprenden que lograr los resultados es posible y sostenible\nen el tiempo. Los planes de adaptan en cualquier País del mundo y están divididos en tres etapas donde se comienza por el plan inicial. Todos los planes cuentas con seguimiento para que puedas consultarme todas las dudas que te surjan durante el proceso.",
    objetivosText1: "BASTA DE EMPEZAR Y DEJAR. HAREMOS TODO LO POSIBLE PARA QUE ESTE INICIO SEA EL VERDADERO COMIENZO. EL FACTOR DE LA MOTIVACIÓN Y LA DISCIPLINA JUNTO CON LA ALIMENTACIÓN ES LO QUE MARCA LA DIFERENCIA A LA HORA DEL RESULTADO Y EL HABITO SOSTENIBLE EN EL TIEMPO. TODOS LOS PLANES SON A DISTANCIA, ESTANDO DISPONIBLES PARA TODOS LOS PAISES Y SIEMPRE SE COMIENZA POR EL PLAN INICIAL ORIENTADO A TU OBJETIVO.",
    objetivosTitle1: "¿Por qué quiero que inicies con nuestro plan? Y que te ofrece?",
    objetivosText2: "Quiero que inicies por que estoy dispuesto a hacerte mejorar en muchos aspectos como : físico, anímico y mental por que se que siguiendo este plan que elaboramos con nuestro equipo está adaptado para que cualquier persona ya sea mateur , medio o pro pueda tener una guía completa de los mejores ejercicios de para qué sirven y cuales son los beneficios esto adecuado a tus metas ya sea GANAR MASA MUSCULAR , Si llegaste a tu peso ideal con o sin la ayuda nuestra PODER MANTENERLO Y DISFRUTARLO o si queres perder grasa esos kilitos de más , esos rollitos que simplemente no te gusta verlos cuando te miras al espejo Estás en EL LUGAR CORRECTO . Acá no hay fórmulas mágicas si estás buscando eso soga buscando. Acá se entrena , acá se crean hábitos y se forma Disciplina . VAS A TENER CONTACTO DIRECTO con el Personal trainner encargado de armar las rutinas etc para que puedas sacar todas tus dudas tendrás tu planilla de seguimiento desde el inicio del plan con un chequeo de avances etc cada 2 semanas te cuento un poco más ¿? Nuestros planes constan en 3 niveles amateur , medio y pro en los cuales desde donde comienzan deberán ir subiendo de intensidad de mes en mes",
    objetivosTitle2: "¿Cómo seria tu vida si lograrías mejorar en un 100% tu relación con la comida, logrando el objetivo que buscas y manteniendo esos resultados en el tiempo? Quiero enseñarte que la forma correcta de aportar nutrientes no solo te va a dar resultados, sino que también, vas a tener ENERGÍA.",
    sloganTitle: "Actitud + Esfuerzo + Perseverancia",
    sloganText: "Los tres componentes necesarios para lograr los objetivos tanto físicos como mentales. Se necesita trabajar mucho en la voluntad de la persona, generar ganas, entusiasmo para realizar la actividad física. No existe empezar y dejar. No arrancas el lunes. Es una decisión que debes tomar ya y empezar tu cambio. Podemos ayudarte para que te sientas acompañado, viendo la evolución en tu cuerpo y mente, generar pequeñas metas cada vez mas desafiantes, hasta conseguir el objetivo del plan. Una vez realizado esto podrás hacer un seguimiento en la web de tu evolución. Tambien podes acceder a la Planilla de Evolución.",
    telefono: "3834545986",
    instagram: "entrenahabitos"
  };

  return (
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<Page informacion={informacion}/>} />
      <Route  path="/comprar" element={<CompraPlan telefono={informacion.telefono}/>} />
      <Route  path="/aprobado" element={<CompraPlanSuccess />} />
      <Route  path="/rechazado" element={<CompraPlanError />} />
      <Route  path="/pendiente" element={<CompraPlanPendiente telefono={informacion.telefono} />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
