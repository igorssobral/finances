import "./style.css";
import { AiOutlineSearch, AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { SiNubank,SiPicpay } from "react-icons/si";
import { useState } from "react";

export default function Home() {
  const [visible, setVisible] = useState(true);

  function handleClick() {
    setVisible(() => !visible);
  }

  return (
    <div className="container">
      {/* <input type="text" className="input"/> 
           <AiOutlineSearch className="search"/> */}

      <section className="section-content">
        <div className="section">
          <FaUserCircle  className="userProf" />
        </div>

        <div className="saldo-content">
          <p className="saldo">
          Saldo: R$ {visible ? "0,00" : "_____"}
          {!visible && <AiFillEyeInvisible title="Ver saldo" onClick={handleClick} className="eye" />}
          {visible && (
            <AiFillEye title="Esconder saldo" onClick={handleClick} className="eye" />
          )}
        </p>
        </div>
        
      </section>
      <section className="section-home">
        <div className="section-primary">
          <li className="banks">
            <SiNubank className="nubank icon"/>
            <SiPicpay className="picpay icon"/>
            <SiNubank className="nubank icon"/>
            <SiPicpay className="picpay icon"/>
            <SiNubank className="nubank icon"/>
            <SiPicpay className="picpay icon"/>
            <SiNubank className="nubank icon"/>
          </li>
            

        </div>
        <div className="section-secondary"></div>
      </section>
    </div>
  );
}
