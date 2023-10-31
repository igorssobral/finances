import "./style.css";
import Button from "@mui/material/Button";
import { AiOutlineSearch, AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { SiNubank, SiPicpay } from "react-icons/si";
import { useState } from "react";
import Icon from "../../ui/icon";
import { Chart } from "react-google-charts";

export default function Home() {
  const [visible, setVisible] = useState(true);
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
            Saldo: R$ {visible ? "3.300,00" : "_____"}
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
          </p>
        </div>
      </section>
      <section className="section-home">
        <div className="section-primary">
          <label>Seus Bancos</label>
          <li className="banks">
            <Icon
              icon={<SiNubank  className="nubank icon" />}
              label="R$ 99,99" bank="Nubank"
            />
            <Icon
              icon={<SiPicpay  className="picpay icon" />}
              label="R$ 99,99" bank="Picpay"
            />
            <Icon
              icon={<SiNubank  className="nubank icon" />}
              label="R$ 99,99"bank="Nubank"
            />
            <Icon
              icon={<SiPicpay className="picpay icon" />}
              label="R$ 99,99" bank="Picpay"
            />
            <Icon
              icon={<SiNubank className="nubank icon" />}
              label="R$ 99,99" bank="Nubank"
            />
          </li>
          <div className="primary-content"></div>
        </div>
        <div className="section-secondary">
          <div className="secondary">
            <p>Comida R$799,00</p>
            <p>Energia R$199,00</p>
            <p>Agua R$149,00</p>
            <p>Academia R$129,00</p>
            <p>Lazer R$499,00</p>
          </div>
        </div>
      </section>
    </div>
  );
}
