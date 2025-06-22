import { useState, type FC } from "react";
import type { User } from "../../types";
import useAuth from "../../hooks/useAuth";
import useUser from "../../hooks/useUser";
import { Link } from "react-router-dom";


const UserInfo:FC = () => {
  const [isOpen,setIsOpen] =useState(false);
  const {user,isLoading}=useUser();
  console.log("user",user);
  const {logout}= useAuth();
   
 
     

  return (
   <div className="relative flex jusstify-end">
      <button onClick={()=>setIsOpen(!isOpen)} className="flex item-center justify-end gap-1
         cursor-pointer">
        <img src="/user.svg" className="" />
        <p className="font-semibold text-sm md:text-base">
          {user?.firstName} {user?.lastName}
        </p>
     </button>


     {isOpen &&
     (
      <div className="absolute bg-fa-white p-3 shadow-lg 
         rounded-md mt-3 z-50 flex flex-col items-start">
         <Link to="/Admin" className=" p-3 px-6 hover:bg-gray-300/30 w-full">Admin Paneli</Link>
         <button className="p-3 hover:bg-gray-300/30 text-start">Çıkış Yap</button>
      </div>)}
    </div> 
  );
};

export default UserInfo;
