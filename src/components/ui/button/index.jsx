import "./style.css";

export default function Button(props) {
  return (
    <button title={props.title} onClick={props.onClick}>
      {props.label}
    </button>
  );
}
