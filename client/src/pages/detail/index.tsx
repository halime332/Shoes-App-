import type { FC } from "react"
import { useParams } from "react-router-dom";
import { useShoes } from "../../hooks/useShoes";
import Loader from "../../components/loader";
import Error from "../../components/error";
import Images from "../../components/detail-page/images";
import Head from "../../components/detail-page/head";
import Color from "../../components/detail-page/color";
import Size from "../../components/detail-page/size";
import Foot from "../../components/detail-page/foot";


const Detail:FC = () => {
  const {id}= useParams<{id:string}>();
  const {shoe} =useShoes();
  const shoeQuery =shoe(id!);
  //typscript de ! operatöre değişkenin tipindeki | undefined
  //ifadesini ortadan kaldırır

  
  if(shoeQuery.isLoading) return <Loader/>
  if(shoeQuery.isError) return <Error message={shoeQuery.error.message} refetch={shoeQuery.refetch}/>;




  return (
    <div className="mt-8 max-w-6xl mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-3">
      <div className=" xl:col-span-2 xl:col-span-2 flex justify-center">
        <Images  item={shoeQuery.data!} />
      </div>

      <div className="flex flex-col gap-8 flex flex-col gap-6 justify-center">
        <Head item={shoeQuery.data!} />
        <Color item={shoeQuery.data!} />
        <Size item={shoeQuery.data!} />
        <Foot item={shoeQuery.data!} />
      </div>
    </div>
  );
};

export default Detail;
