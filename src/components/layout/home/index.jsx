import "./style.css";
import Button from "../../ui/button";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { VscDiffAdded } from "react-icons/vsc";
import { useState } from "react";
import TextField from '@mui/material/TextField';

export default function Home() {
  const [visible, setVisible] = useState(true);
  const [visibleInput, setVisibleInput] = useState(false);
  const [saldo, setSaldo] = useState();
  const [input, setInput] = useState();
  const [options, setOptions] = useState({
    title: "Finanças",
  });
  const [data, setData] = useState([
    ["Linguagens", "Quantidade"],
    ["Nubank", 100],
    ["picpay", 80],
    ["Bradesco", 50],
  ]);
  const [dataBar] = useState([
    ["Linguagens", "Quantidade"],
    ["Nubank", 100],
    ["picpay", 80],
    ["Bradesco", 50],
  ]);

  function handleClick() {
    setVisible(() => !visible);
  }
  function handleInput() {
    setVisibleInput(() => !visibleInput);
  }
  function addSaldo() {
    console.log("🚀 ~ file: index.jsx:40 ~ Home ~ input:", input)
    setSaldo(input);
    
  }

  return (
    <div className="container">

      <section className="section-content">
        <div className="section">
          <FaUserCircle className="userProf" />
        </div>

        <div className="saldo-content">
          <p className="saldo">
            Saldo: R$ {visible ? saldo : "_____"}
            {!visible && (
              <AiFillEyeInvisible
                title="Ver saldo"
                onClick={handleClick}
                className="eye"
              />
            )}
            {visible && (
              <AiFillEye
                title="Esconder saldo"
                onClick={handleClick}
                className="eye"
              />
            )}
          </p>{" "}
          <p className="addS">
            Adicionar saldo{" "}
            <VscDiffAdded className="add" onClick={handleInput} />
          </p>
          {visibleInput && (
           <TextField id="filled-basic" helperText="adicione o valor" label="Saldo" variant="filled"  placeholder="R$:"
              onChange={(e) => setInput(e.target.value)}
              value={input}/>
             
            
          )}
          {visibleInput && (
            <Button label="Adicionar" onClick={addSaldo}></Button>
          )}
        </div>
      </section>
      <section className="section-home">
        <div className="section-primary">
          <label className="label"></label>
          <div className="primary-content"></div>
        </div>
      
      </section>
    </div>
  );
}
