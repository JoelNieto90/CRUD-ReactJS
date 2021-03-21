import React from "react";
import '../styles/Search.scss'

export default function Search() {
  return (
    <section className="SearchComponent">
      <p className="Search">Buscar</p>
      <input type="text" className="input" />
    </section>
  );
}
