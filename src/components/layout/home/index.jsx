import "./style.css";
import { useState } from "react";
import ApexCharts from "apexcharts";

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
  const options = {
    chart: {
      type: 'donut'
    },
    series: [{
      name: 'sales',
      data: [30,40,35,50,49,60,70,91,125]
    }],
    xaxis: {
      categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
    }
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
