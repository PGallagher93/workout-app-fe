import {useState, useEffect} from "react"
import {Bars3Icon} from '@heroicons/react/24/outline'

const NavBar = ({user})=> {
  console.log(user)
  
  


 

  return (
   <nav className="grid grid-cols-4 w-full ">
    <Bars3Icon className="text-orange-400"></Bars3Icon>
    <h1 className="text-orange-400 col-span-2">{user.username ? (user.username): "Welcome!"}</h1>
    {!user.username ? (
      <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
      <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
  </div>
    ) : (<img class="w-10 h-10 rounded-full" src={user.avatar} alt="Rounded avatar"></img>
    )}
    

   </nav>
  );
}
export default NavBar
