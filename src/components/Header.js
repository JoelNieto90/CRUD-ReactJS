import React from "react";
import Button from "./MiButton";
import Search from "./Search";
import ModalCrearEmpleado from "./ModalCrearEmpleado";
import "../styles/Header.scss";

export default function Header() {
  return (
    <section className="Header">
      <ModalCrearEmpleado buttonLabel="AGREGAR" />
      <Search />
    </section>
  );
}
