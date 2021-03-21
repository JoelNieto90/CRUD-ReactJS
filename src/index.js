import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import TableContext from "./context/TableContext";

ReactDOM.render(
  <React.StrictMode>
    <TableContext.Provider value="blue">
      <App />
    </TableContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);