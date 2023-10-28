import './style.css';

export default function Icon(props) {
    return(
        <div className="icon-content">
            {props.icon} <p>{props.label}</p>
        </div>
    )
};
