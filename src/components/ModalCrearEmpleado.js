import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import initialState from "../api/initialState.json";

const ModalCrearEmpleado = (props) => {
  const { buttonLabel, className } = props;
  const [modal, setModal] = useState(false);
  const dataState = initialState.data;
  const [data, setData] = useState(dataState);

  const toggle = () => setModal(!modal);

  const handleChange = (e) => {
    setData({
      form: {
        data,
        [e.target.name]: e.target.value,
      },
    });
  };

  const insertar = () => {
    var valorNuevo = data;
    valorNuevo.id = data.length + 1;
    var lista = data;
    lista.push(valorNuevo);
    setData({ modalInsertar: false, data: lista });
  };

  return (
    <div>
      <Button color="btn btn-outline-success text-white" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader>
          <div>
            <h3>Insertar Nombre</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label>Id:</label>

            <input
              className="form-control"
              readOnly
              type="text"
              value={data.length + 1}
            />
          </FormGroup>

          <FormGroup>
            <label>Nombre:</label>
            <input
              className="form-control"
              name="Nombre"
              type="text"
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label>EMAIL:</label>
            <input
              className="form-control"
              name="EMAIL"
              type="text"
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label>EMPRESA:</label>
            <input
              className="form-control"
              name="EMPRESA"
              type="text"
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label>SALARIO:</label>
            <input
              className="form-control"
              name="SALARIO"
              type="text"
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label>IMAGEN:</label>
            <input
              className="form-control"
              name="IMAGEN"
              type="text"
              onChange={handleChange}
            />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={toggle} >
            Insertar
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalCrearEmpleado;
