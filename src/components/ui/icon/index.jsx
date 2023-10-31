import "./style.css";

export default function Icon(props) {
  return (
    <div className="icon-content">
      {props.icon} <span className="bank">{props.bank}</span>{" "}
      <p>Saldo: {props.label}</p>
    </div>
  );
}
