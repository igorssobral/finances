import React, { useState } from "react";
import "./style.css";
import { Input } from "../../components/ui/input";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SearchIcon from "@mui/icons-material/Search";
import { ListContent } from "../../components/layout/list";
import { Button } from "@mui/material";
import ChartBar from "../../components/layout/chart/ChartBar";

const Meta = () => {
  const [addMetaVisible, setAddMetaVisible] = useState(false);
  const [meta, setMeta] = useState({ meta: "", valor: 0, aporte: 0 });

  function handleAddMetasVisible() {
    setAddMetaVisible(!addMetaVisible);
  }

  function handleMetas(e) {
  
  }

  return (
    <section className="container">
      <div className="card1">
        <h3>Valor Total a Ser Poupado</h3>
        <p>R$ 10.000</p>
      </div>
      <div className="card2">
        <ChartBar />
      </div>
      <div className="card3">
        <div className="form-content">
          {addMetaVisible && (
            <form className="form-metas " action="">
              <Input
                placeholder="digite a meta"
                label="Meta"
                width="200px"
                onChange={(e) => handleMetas(e)}
              />
              <Input
                placeholder="R$"
                label="Valor total a poupar"
                width="200px"
                type="number"
                onChange={(e) => handleMetas(e)}
              />
              <Input
                placeholder="R$"
                label="Aporte Mensal"
                width="200px"
                type="number"
                onChange={(e) => handleMetas(e)}
              />
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
              <Button
                style={{
                  height: "fit-content",
                  width: "200px",
                  backgroundColor: "#646464",
                  color: "#fff",
                }}
                onClick={handleAddMetasVisible}
              >
                Cancelar
              </Button>
            </form>
          )}

          {!addMetaVisible && (
            <Button
              style={{
                height: "max-content",
                width: "max-content",
                gap: "10px",
                backgroundColor: "#697eb9",
                color: "#fff",
              }}
              onClick={handleAddMetasVisible}
            >
              <AddCircleOutlineIcon /> Adicionar Meta
            </Button>
          )}
        </div>

        <section className="lists-metas">
          <div className="addMeta">
            <Input placeholder="Buscar meta" />
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
              <SearchIcon />
            </Button>
          </div>
          <ListContent name="Viagem" />
        </section>
      </div>
    </section>
  );
};

export default Meta;
