import { Button } from "@mui/material";
import React from "react";
import { Input } from "../../components/ui/input";
import "./styles.css";

const Transactions = () => {
  return (
    <div className="container">

      <div className="card">
        <h2>Adicionar Transação</h2>
        <form action="">
          <Input label="Transação" type="text" />
          <Input label="Valor gasto" type="number" />
          <Input  label="Data" type="date" />
          
        </form><Button
          
            style={{
              height: "fit-content",
              width: "80%",
              margin: "20px 0",
              backgroundColor: "#697eb9",
              color: "#fff",

            }}
          >
            Adicionar
          </Button>
      </div>
      <div className="card_2"></div>
    </div>
  );
};

export default Transactions;
