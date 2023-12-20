import "./style.css";
import { useState } from "react";
import Chart from "react-apexcharts";
import Donut from "../chart";
import { BiSolidBank } from "react-icons/bi";
import PaidIcon from "@mui/icons-material/Paid";
import MultilineChartIcon from '@mui/icons-material/MultilineChart';
import { Content } from "../../ui/section-content/content";


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
    console.log("🚀 ~ file: index.jsx:40 ~ Home ~ input:", input);
    setSaldo(input);
  }

  return (
    <div className="container">
      <section className="section-content">
        <div className="primary-content">
          <Content
            children={
              <BiSolidBank
                fontSize={"40px"}
                style={{ color: "#230549", padding: "10px" }}
              />
            }
          />
          <Content
            children={
              <PaidIcon
                fontSize={"large"}
                style={{ color: "#230549", padding: "10px" }}
              />
            }
          />
          <Content children={<MultilineChartIcon  fontSize={"large"}
                style={{ color: "#230549", padding: "10px" }}/>}/>
        </div>

        <div className="aside">
          <div className="chart">
            <Donut />

          </div>
          <div className="table_content">
          
               
               
          </div>
        </div>

       
      </section>
    </div>
  );
}
