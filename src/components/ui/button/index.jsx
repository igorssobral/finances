
import * as React from "react";
import Button from "@mui/material/Button";

export default function ButtonUi(props) {
  return (
    <Button variant="contained" title={props.title} onClick={props.onClick}>
      {props.label}
    </Button>
  );
}
