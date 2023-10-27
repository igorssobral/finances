import './style.css';
import { AiFillHome } from "react-icons/ai";

export default function NavItems(props) {
  return (
    <li>
      <a href={props.href} className={props.class} onClick={props.onClick}>
        {props.icon}{props.label}
      </a>
    </li>
  );
}
