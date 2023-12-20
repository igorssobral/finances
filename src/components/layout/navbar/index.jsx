import "./style.css";
import NavItems from "../navItens";
import {
  AiFillHome,
  AiOutlineSearch,
  AiFillEye,
  AiFillEyeInvisible,
} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import { Badge } from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Navbar() {
  return (
    <nav>
      <ul className="pages">
        <NavItems label="Visão Geral" class="navi" />
        <NavItems label="Transações" class="navi"/>
        <NavItems label="Metas" class="navi"/>
      </ul>
      <ul className="pages">
         <NavItems label="" href="#" icon={<AccountCircleIcon fontSize="" />} />
      <NavItems label="" href="#" icon={<Badge badgeContent={1} color="secondary">
  <MailIcon color="white" />
</Badge> } />
      </ul>
     
    </nav>
  );
}
