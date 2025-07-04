import type { FC } from "react";
import Form from "../../components/form";
import { useNavigate, useParams } from "react-router-dom";
import { useShoes } from "../../hooks/useShoes";
import Loader from "../../components/loader";
import type { ShoeData } from "../../types";



const Edit:FC = () => {
    const navigate =useNavigate();
    const {id} =useParams<{id:string}>();
    const {shoe,edit}=useShoes();
    const {isLoading,data}=shoe(id as string);

    const handleAction =() =>{
      edit.mutate({id,data} as {id:string; data:ShoeData});
      navigate("/admin");
    };


    if(isLoading)  return  <Loader/>;

  return (
    <div className="max-w-[1000px] mx-auto">
       <h1 className="text-2xl md:text-3xl font-semibold mb-5">
        Ürünü Düzenle
        </h1>

        <Form handleAction={handleAction} shoeData={data}/>
    </div>
  )
}

export default Edit;
