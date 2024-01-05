import React from "react";
import { Input } from "../../components/ui/input";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import "./style.css";
import { Button } from "@mui/material";
const Meta = () => {
  return (
    <section className="container">
      <div className="card1"></div>
      <div className="card2"></div>
      <div className="card3">
        <form className="form-metas "action="">
          <Input label="Meta" width="200px" />
          <Input label="Valor  poupado mensal" width="200px" type="number"/>
          <Input label="Data limite" width="200px" type="date"/>
          <Button
          style={{
            height: "fit-content",
            width: "200px",
            
            backgroundColor: "#697eb9",
            color: "#fff",
          }}
        >
          Adicionar
        </Button>
        </form>
        <table>
            <tr>
              <th>Meta</th>
              <th>Data</th>
              <th>Valor</th>
              <th>Poupado Mens.</th>
              <th>Ações</th>
            </tr>
            <tbody>
            <tr>
              <td>Viagem</td>
              <td>12/12/2023</td>
              <td>500</td>
              <td>50</td>
              <td><EditIcon color="info"/><DeleteIcon color="warning"/></td>
            </tr>
            <tr>
              <td>Compra de móvel</td>
              <td>12/12/2023</td>
              <td>400</td>
              <td>40</td>
               <td><EditIcon color="info"/><DeleteIcon color="warning"/></td>
            </tr>
            <tr>
              <td>Festa</td>
              <td>12/12/2023</td>
              <td>500</td>
              <td>50</td>
               <td><EditIcon color="info"/><DeleteIcon color="warning"/></td>
            </tr>

            </tbody>
            
          </table>
      </div>
    </section>
  );
};

export default Meta;
