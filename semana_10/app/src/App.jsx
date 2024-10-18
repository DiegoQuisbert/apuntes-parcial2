import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Card'
import Card from './Card';


function App() {
  let nombre = "Jose";
  let edad = 21;
  const cursos = ['HTML', 'JS', 'React'];
  let titulo = <h2>esto es un titulo what</h2>;
  return (
    <div>
      <h1>apps híbridas</h1>
      {titulo}
      <Card texto="Termo" precio={3000}/>
      <Card texto="Mate" precio={5000} />

      <p className='verde'>hola {nombre} </p>
      <p> {edad + 2} </p>
      <p>{cursos[2]}</p>
    </div>
  )
}

export default App
