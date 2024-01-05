import React from "react";
import { Input } from "../../components/ui/input";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import "./style.css";
import { Button } from "@mui/material";
import ChartBar from "../../components/layout/chart/ChartBar";
const Meta = () => {
  return (
    <section className="container">
      <div className="card1"></div>
      <div className="card2"><ChartBar/></div>
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
        
       
      </div>
    </section>
  );
};

export default Meta;
