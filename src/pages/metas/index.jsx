import React from "react";
import { Input } from "../../components/ui/input";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SearchIcon from '@mui/icons-material/Search';
import { ListContent } from "../../components/layout/list";
import "./style.css";
import { Button } from "@mui/material";
import ChartBar from "../../components/layout/chart/ChartBar";
const Meta = () => {
  return (
    <section className="container">
      <div className="card1"></div>
      <div className="card2"><ChartBar/></div>
      <div className="card3">
        {/* <form className="form-metas "action="">
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
        </form> */}
        <div className="addMeta">
          
          <Input  />
          <Button style={{
            height: "max-content",
            marginTop: "4px",
            width: "max-content",
            gap: "10px",
            backgroundColor: "#697eb9",
            color: "#fff",
          }}><SearchIcon/></Button>


          <Button style={{
            height: "max-content",
            marginTop: "4px",
            width: "max-content",
            gap: "10px",
            backgroundColor: "#697eb9",
            color: "#fff",
          }}><AddCircleOutlineIcon/> Adicionar Meta</Button>
        </div>
       <section className="lists-metas">
          <ListContent name="Viagem" />

       </section>
      </div>
    </section>
  );
};

export default Meta;
