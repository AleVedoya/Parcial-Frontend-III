import React, { useState } from "react";
import Card from "./Card";
import "./Formulario.css";

const Formulario = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    color: "",
  });

  const [show, setShow] = useState(false);
  const [err, setErr] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      inputValue.name.length >= 3 &&
      inputValue.color.length >= 6 &&
      inputValue.name.indexOf(" ") !== 0
    ) {
      setShow(true);
      setErr(false);
    } else {
      setErr(true);
      setShow(false);
    }
  };

  return (
    <div className="main-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <label>Ingresa tu nombre:</label>
        <input
          className="data-input"
          type="text"
          onChange={(e) =>
            setInputValue({ ...inputValue, name: e.target.value })
          }
        />
        <label>Ingresa tu color favorito:</label>
        <input
          className="data-input"
          type="text"
          onChange={(e) =>
            setInputValue({ ...inputValue, color: e.target.value })
          }
        />
        <button type="submit">Enviar</button>
      </form>

      {show && (
        <Card>
          <div className="data">
            <h2>Hola {inputValue.name}</h2>
            <p>Sabemos que tu color favorito es:</p>
            <div className="color_fav">{inputValue.color}</div>
          </div>
        </Card>
      )}
      {err && <h2>Por favor chequea que la información sea correcta</h2>}
    </div>
  );
};

export default Formulario;
