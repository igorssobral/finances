import { Button } from "@mui/material";
import React from "react";
import { Input } from "../../components/ui/input";
import "./styles.css";

const Transactions = () => {
  return (
    <div className="container">
      <div className="card"></div>
      <div className="card_2">
        
        <form action="">
      <Input label="Transação" type="text"/>
      <Input label="Valor gasto" type="number"/>
      <Input label="Data" type="date"/>
      <Button style={{height: "fit-content", margin: "20px 0", backgroundColor: "white"}}>Adicionar</Button>

        </form>
        <div>
          dddsdd
        </div>
      </div>
    </div>
  );
};

export default Transactions;
