import "./style.css";

export default function Button(props) {
  return (
    <button title={props.title} onClick={props.onclick}>
      {props.label}
    </button>
  );
}
