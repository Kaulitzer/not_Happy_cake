import React from 'react';

function Contacto() {
  return (
    <div className="contacto">
      <h1>Cuéntanos, ¿En qué te podemos ayudar?</h1>
      <form>
        <div className="form-group">
          <label htmlFor="correo">Correo</label>
          <input
            type="email"
            id="correo"
            name="correo"
            placeholder="name@example.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="descripcion">Descripción</label>
          <textarea
            id="descripcion"
            name="descripcion"
            rows="4"
            placeholder="Escribe tu mensaje aquí..."
          ></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contacto;
