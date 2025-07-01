import { Navigate } from "react-router-dom";
import useUser from "../../hooks/useUser";
import Loader from "../loader";
import Layout from "../layout";
import type { FC } from "react";


interface Props{
    allowedRole?:"user"|"admin";
}
const Protected:FC<Props> = ({allowedRole}) => {

    const {user,isLoading,isAuthenticated} =useUser();

    //kullanıcının oturumu kapalıysa logine yönlendiriyo
    if(!isAuthenticated)  return <Navigate to="/login"/>;

     //oturum açıksa ve role özel bir sayfa değilse sayfayı gönder
    if(isAuthenticated && !allowedRole)
    return( 
        <div>
            <Layout/>
        </div>
    );
    
     //role özel bir sayfaysa o zaman kullanıcı yüklenene kadar loader göster

    if(allowedRole && isLoading) return <Loader/>;
    

    //kullanıcının rolü izin verilen role eşitse o zaman sayfayı göster
    if(user?.role===allowedRole){
        return (
            <div>
                <Layout/>
            </div>
        );
      //kullanıcının rolü yeterli değilse anasayfaya yönlendir
        return <Navigate to="/"/>
    }



  
};

export default Protected;
