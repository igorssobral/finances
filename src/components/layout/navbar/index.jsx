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

export default function Navbar() {
  return (
    <nav>
      <ul className="pages">
        <NavItems label="Visão Geral" class="navi" />
        <NavItems label="Financeiro" class="navi"/>
        <NavItems label="Metas" class="navi"/>
      </ul>

      <NavItems label="" href="#" icon={<CgProfile />} />
      <NavItems label="" href="#" icon={<Badge badgeContent={4} color="primary">
  <MailIcon color="action" />
</Badge> } />
    </nav>
  );
}
