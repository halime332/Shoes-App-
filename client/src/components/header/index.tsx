import type { FC } from "react"
import useUser from "../../hooks/useUser";


const Header:FC = () => {

  //custom hookumuzu kullanma
  const {user,isLoading,error}=useUser();

  
   
   
    return (<div>Header:FC</div>);
  
};

export default Header;
