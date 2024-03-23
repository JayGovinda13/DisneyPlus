import React from "react";
import logo from "../Images/logo.png";
import user from '../Images/user.jpg'
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";

function Header() {
  const menu = [
    { name: "INÍCIO", icon: HiHome },
    { name: "PESQUISA", icon: HiMagnifyingGlass },
    { name: "MINHA LISTA", icon: HiPlus },
    { name: "ORIGINAIS", icon: HiStar },
    { name: "FILMES", icon: HiPlayCircle },
    { name: "SÉRIES", icon: HiTv },
  ];
  return (
    <div className="flex items-center justify-center p-5">
      <div className="flex gap-8 items-center">
        <img src={logo} className="w-[80px] md:w-[115px] object-cover" />
        {menu.map((item) => (
          <HeaderItem name={item.name} Icon={item.icon} />
        ))}
      </div>

      <img
        src={user}
        className="w-[40px] rounded-full"
      />
    </div>
  );
}

export default Header;
