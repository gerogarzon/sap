import sap from "./assets/descarga3.png";
import "./App.css";

function App() {
  return (
    <div>
      <nav className="navbar navbar-dark ">
        <div className="container-fluid">
          <img
            className="navbar-brand mb-0 h1 imagen_sap"
            src={sap}
            alt="sap logo"
          ></img>
          <h5 className="nav_titulo"> Exponential Inception 🚀 </h5>
          <h5 className="nav_titulo">2023</h5>
        </div>
      </nav>
      <h4 className="titulo_principal ">Applicant: Geronimo, Garzon</h4>
      <div className="container">
        {/* <div className="body"></div> */}
        <iframe
          width="853"
          height="430"
          src="https://www.youtube.com/embed/LQWAZCa5qyg "
          title="13 de octubre de 2022"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          // className="video"
        ></iframe>
      </div>
    </div>
  );
}

export default App;
