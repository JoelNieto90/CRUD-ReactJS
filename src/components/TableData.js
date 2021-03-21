import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Container } from "reactstrap";
import initialState from "../api/initialState.json";
import ModalEditarEmpleado from "./ModalEditarEmpleado";
import ModalEliminarEmpleado from "./ModalEliminarEmpleado";

const TableData = () => {
  const dataState = initialState.data;
  const [data, setData] = useState(dataState);
  const [moneda, setMoneda] = useState(false);

  const handleClick = () => {
    setMoneda(!moneda);
  };

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  return (
    <section className="Table">
      <Container>
        <div class="table-responsive">
          <Table striped hover>
            <thead class="table-dark">
              <tr>
                <th>ID</th>
                <th>NOMBRE</th>
                <th>EMAIL</th>
                <th>EMPRESA</th>
                <th>
                  <div class="dropdown">
                    <button
                      class="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      SALARIO
                    </button>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a class="dropdown-item" onClick={handleClick}>
                          MXN
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" onClick={handleClick}>
                          USD
                        </a>
                      </li>
                    </ul>
                  </div>
                </th>
                <th>IMAGEN</th>
                <th>EDITAR</th>
                <th>ELIMINAR</th>
              </tr>
            </thead>

            <tbody>
              {data.map((dato) => {
                return (
                  <tr scope="row" key={dato.id}>
                    <td>{dato.id}</td>
                    <td>{dato.NOMBRE}</td>
                    <td>{dato.EMAIL}</td>
                    <td>{dato.EMPRESA}</td>
                    {dato.SALARIO >= 10000 ? (
                      <td
                        className="text-right"
                        style={{ backgroundColor: "rgba(86, 168, 31, 0.7)" }}
                      >
                        {moneda
                          ? formatter.format(dato.SALARIO * 21.5)
                          : formatter.format(dato.SALARIO)}
                      </td>
                    ) : (
                      <td
                        className="text-right"
                        style={{ backgroundColor: "rgba(148, 11, 41, 0.75)" }}
                      >
                        {moneda
                          ? formatter.format(dato.SALARIO * 21.5)
                          : formatter.format(dato.SALARIO)}
                      </td>
                    )}
                    <td>{dato.IMAGEN}</td>
                    <td>
                      <ModalEditarEmpleado buttonLabel="EDITAR"  data={dato} />
                    </td>
                    <td>
                      <ModalEliminarEmpleado buttonLabel="ELIMINAR" data={dato} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </Container>
    </section>
  );
};

export default TableData;
