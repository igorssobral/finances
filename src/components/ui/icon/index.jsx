import "./style.css";

export default function Icon(props) {
  return (
    <div className="icon-content">
      {props.icon} <span className="bank">{props.bank}</span>
      Saldo: <p className="value">{props.label}</p>
    </div>
  );
}
