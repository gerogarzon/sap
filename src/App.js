import sap from "./assets/sap.jpg"
import './App.css';

function App() {
  return (
    <>
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <img className="navbar-brand mb-0 h1 imagen_sap" src={sap} alt="sap logo"></img>
        <h5 className="nav_titulo">Academy for Customer Success – S-CSP</h5>
        <h5 className="nav_titulo">Program 2023</h5>
      </div>
    </nav>
    <h3 className="titulo_principal">Job Interview</h3>
    <h4 className="titulo_principal">Applicant: Geronimo, Garzon </h4>
    <div className="container">
    <iframe width="853" height="450" src="https://www.youtube.com/embed/ST6KbIoNMQU" title="13 de octubre de 2022" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
</>
  );
}

export default App;
