import { Button } from "@mui/material";
import React, { useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Search } from "@mui/icons-material";
import { Input } from "../../components/ui/input";
import "./styles.css";

const Transactions = () => {
  const filters = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho",];
  const [transação, setTransação] = useState({
    transaction: "",
    value: 0,
    data: "",
  });



  return (
    <div className="container_transaction">
      <div className="card">
        <h2>Adicionar Transação</h2>
        <form action="">
          <Input placeholder="digite a transaçào" label="Transação" type="text" />
          <Input placeholder="R$" label="Valor gasto" type="number" />
          <Input label="Data" type="date"  />
        </form>
        <Button
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
      <div className="card_2">
        <div className="search-content">
           <Input placeholder="Buscar transação"/>
            <Button
              style={{
                height: "max-content",
                marginTop: "4px",
                width: "max-content",
                gap: "10px",
                backgroundColor: "#697eb9",
                color: "#fff",
              }}
            >
              <Search/>
            </Button>
        </div>

       
        <div className="table-content">
          <table className="table-transactions">
            <tr>
              <th>Transação</th>
              <th>Data</th>
              <th>Valor</th>
              <th>Ações</th>
            </tr>
            <tbody>
            <tr>
              <td>Alfreds</td>
              <td>12/12/2023</td>
              <td>500</td>
              <td><EditIcon color="info"/><DeleteIcon color="warning"/></td>
            </tr>
            <tr>
              <td>Centro </td>
              <td>12/12/2023</td>
              <td>400</td>
               <td><EditIcon color="info"/><DeleteIcon color="warning"/></td>
            </tr>
            <tr>
              <td>Alfreds</td>
              <td>12/12/2023</td>
              <td>500</td>
               <td><EditIcon color="info"/><DeleteIcon color="warning"/></td>
            </tr>
            <tr>
              <td>Centro </td>
              <td>12/12/2023</td>
              <td>400</td>
               <td><EditIcon color="info"/><DeleteIcon color="warning"/></td>
            </tr>
            <tr>
              <td>Alfreds</td>
              <td>12/12/2023</td>
              <td>500</td>
               <td><EditIcon color="info"/><DeleteIcon color="warning"/></td>
            </tr>
            <tr>
              <td>Centro </td>
              <td>12/12/2023</td>
              <td>400</td>
               <td><EditIcon color="info"/><DeleteIcon color="warning"/></td>
            </tr>
            <tr>
              <td>Centro </td>
              <td>12/12/2023</td>
              <td>400</td>
               <td><EditIcon color="info"/><DeleteIcon color="warning"/></td>
            </tr>
            <tr>
              <td>Centro </td>
              <td>12/12/2023</td>
              <td>400</td>
               <td><EditIcon color="info"/><DeleteIcon color="warning"/></td>
            </tr>
            <tr>
              <td>Centro </td>
              <td>12/12/2023</td>
              <td>400</td>
               <td><EditIcon color="info"/><DeleteIcon color="warning"/></td>
            </tr>
          
          

            </tbody>
            
          </table>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
