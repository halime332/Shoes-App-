import type { FC } from "react"
import { useParams } from "react-router-dom";
import { useShoes } from "../../hooks/useShoes";
import Loader from "../../components/loader";
import Error from "../../components/error";
import Images from "../../components/detail-page/images";


const Detail:FC = () => {
  const {id}= useParams<{id:string}>();
  const {shoe} =useShoes();
  const shoeQuery =shoe(id!);
  //typscript de ! operatöre değişkenin tipindeki | undefined
  //ifadesini ortadan kaldırır

  
  if(shoeQuery.isLoading) return <Loader/>
  if(shoeQuery.isError) return <Error message={shoeQuery.error.message} refetch={shoeQuery.refetch}/>;

  console.log("Shoe query error", shoeQuery.error);


  return(
   <div>
      <div>
        <Images item={shoeQuery.data!} />
      </div>
    </div>
  
  );
};

export default Detail;
