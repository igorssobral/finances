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
          <li className="banks">
            <Icon
              icon={<SiNubank className="nubank icon" />}
              label="R$ 99,99"
            />
            <Icon
              icon={<SiPicpay className="picpay icon" />}
              label="R$ 99,99"
            />
            <Icon
              icon={<SiNubank className="nubank icon" />}
              label="R$ 99,99"
            />
            <Icon
              icon={<SiPicpay className="picpay icon" />}
              label="R$ 99,99"
            />
            <Icon
              icon={<SiNubank className="nubank icon" />}
              label="R$ 99,99"
            />
          </li>
          <div className="primary-content">
            <Chart
              chartType="PieChart"
              data={data}
              options={options}
              className="grapGastos"
            />
          </div>
        </div>
        <div className="section-secondary">
          <div className="secondary">
            <p>Comida </p>
            <p>Energia</p>
            <p>Agua</p>
            <p>Academia</p>
            <p>Lazer</p>

            <div className="gastos-secondary">
              <span className="spans"> R$799,00</span>
              <span className="spans"> R$199,00</span>
              <span className="spans"> R$149,00</span>
              <span className="spans"> R$129,00</span>
              <span className="spans"> R$499,00</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
