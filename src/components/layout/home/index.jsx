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

        <div className="primary-content">
          <div className="content"></div>
          <div className="content"></div>
          <div className="content"></div>
        </div>

        <div className="aside">

        </div>


      </section>
    
    </div>
  );
}
