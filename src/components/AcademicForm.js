import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Context } from "../store/appContext";

export const AcademicForm = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    rut_academic: "",
    name: "",
    last_name: "",
    contact_number: "",
    address: "",
    email: "",
    student_id: "",
  });

  const handleChange =  (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (id) {
      actions.editAcademic(id, formData);
    } else {
      actions.formAcademic(formData);
    }
    setFormData({
      rut_academic: "",
      name: "",
      last_name: "",
      contact_number: "",
      address: "",
      email: "",
      student_id: "",
    });

    toast.success('Registro completo', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    await new Promise(resolve => setTimeout(resolve, 2000));
    navigate(`/student/${formData.student_id}`);

  };
  
  useEffect(() => {
    actions.getStudents();
  },);

  return (
    <div className="container p-5 mt-5 box shadow">
      <h3 className="text-center mb-5">Apoderado Académico</h3>
      <form className="" onSubmit={handleSubmit}>
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-md-6 border border-4 shadow rounded p-5 w-50">
            <div className="form-group">
              <label htmlFor="rut_academic">Rut</label>
              <input
                type="text"
                className="form-control form-control-sm"
                id="rut_academic"
                name="rut_academic"
                onChange={handleChange}
                value={formData.rut_academic}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Nombres</label>
              <input
                type="text"
                className="form-control form-control-sm"
                id="name"
                name="name"
                onChange={handleChange}
                value={formData.name}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="last_name">Apellidos</label>
              <input
                type="text"
                className="form-control form-control-sm"
                id="last_name"
                name="last_name"
                onChange={handleChange}
                value={formData.last_name}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="student">Estudiante</label>
              <select
                className="form-control form-control-sm"
                id="student_id"
                name="student_id"
                onChange={handleChange}
                value={formData.student_id}
                required
              >
                <option value="" disabled hidden></option>
                {store.students.map((student) => (
                  <option
                    key={student.id}
                    value={student.id}
                  >{`${student.name} ${student.last_name} ${student.rut}`}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="contact_number">Número de Contacto</label>
              <input
                type="text"
                className="form-control form-control-sm"
                id="contact_number"
                name="contact_number"
                onChange={handleChange}
                value={formData.contact_number}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Dirección</label>
              <input
                type="text"
                className="form-control form-control-sm"
                id="address"
                name="address"
                onChange={handleChange}
                value={formData.address}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email_apoderado">Email</label>
              <input
                type="email"
                className="form-control form-control-sm"
                id="email"
                name="email"
                onChange={handleChange}
                value={formData.email}
                required
              />
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-6 d-flex d-flex justify-content-end mt-3">
            <button type="submit" className="btn btn-success mt-2 mx-2 shadow">
              Guardar
            </button>
            <Link to="/formstudent" className="btn btn-danger mt-2 mx-2 shadow">
              Cancelar
            </Link>
          </div>
        </div>
      </form>
      <ToastContainer />
      <ToastContainer />
    </div>
  );
};
