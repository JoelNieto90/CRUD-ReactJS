import React from "react";
import "../styles/Home.scss";
import Header from "./Header";
import TableData from './TableData'

export default function Home() {
  return (
    <section className="Home">
      <Header />
      <TableData />
    </section>
  );
}
