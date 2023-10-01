import React from "react";

export const Login = () => {
  


  return (
    <>
      <section className="box-log row">
        <form>
          <div className="mt-5">
            <label htmlFor="text" className="form-control-label">
              Ingrese su Rut
            </label>
            <div>
              <input
                type="text"
                className="form-control input-rut"
                id="rut-number"
                placeholder="Rut"
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="inputPassword" className="form-label">
              Contraseña
            </label>
            <div>
              <input
                type="password"
                className="form-control input-pass"
                id="inputPassword"
                placeholder="password"
                required
              />
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary mt-3">
                Ingresar
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};
