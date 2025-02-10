import { useState, useEffect } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

const NavBar = ({ user }) => {
  console.log(user);

  return (
    <nav className="flex justify-start w-full p-2">
      <button></button>

      <img
        class="w-10 h-10 rounded-full"
        src={user.avatar}
        alt="Rounded avatar"
      ></img>

      <h1 className="text-orange-400 pl-[5vw] pt-[1vh]"> {user.username}</h1>
    </nav>
  );
};
export default NavBar;
