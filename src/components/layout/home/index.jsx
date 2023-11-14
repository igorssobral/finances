import "./style.css";
import Button from "../../ui/button";
import { AiOutlineSearch, AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { VscDiffAdded } from "react-icons/vsc";
import { SiNubank, SiPicpay } from "react-icons/si";
import { useState } from "react";
import Icon from "../../ui/icon";
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
      {/* <input type="text" className="input"/> 
           <AiOutlineSearch className="search"/> */}

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
          <label className="label">Seus Bancos</label>
          <li className="banks">
            <Icon
              icon={<SiNubank className="nubank icon" />}
              label="R$1045,99"
              bank="Nubank"
            />
            <Icon
              icon={<SiPicpay className="picpay icon" />}
              label="R$899,99"
              bank="Picpay"
            />
            <Icon
              icon={<SiNubank className="nubank icon" />}
              label="R$1045,99"
              bank="Nubank"
            />
            <Icon
              icon={<SiPicpay className="picpay icon" />}
              label="R$899,99"
              bank="Picpay"
            />
            <Icon
              icon={<SiNubank className="nubank icon" />}
              label="R$1045,99"
              bank="Nubank"
            />
          </li>
          <div className="primary-content"></div>
        </div>
        <div className="section-secondary">
          <label className="label">Seus Gastos</label>
          <div className="secondary">
            <table className="table-value">
              <tr>
                <th>Fonte</th>
                <th>Valor</th>
              </tr>

              <tr>
                <td>Comida</td>
                <td>R$799,00</td>
              </tr>

              <tr>
                <td>Energia</td>
                <td>R$199,00</td>
              </tr>

              <tr>
                <td>Agua</td>
                <td>R$149,00</td>
              </tr>

              <tr>
                <td>Academia</td>
                <td>R$129,00</td>
              </tr>

              <tr>
                <td>Lazer</td>

                <td>R$499,00</td>
              </tr>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
