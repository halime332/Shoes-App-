import { useState, type FC } from "react"
import type { Shoe } from "../../types";
import { numbers } from "../../utils/constants";


interface Props {
  item:Shoe;
}


const Size:FC<Props> = ({item}) => {
  const [selected,setSelected] = useState<string>("");

  const toogle =(size:string) => {
    setSelected(selected===size? "":size);
  };
  return (
    <div>
      <h2 className="mb-4 font-semibold">Numara Seçiniz</h2>

      <div className="grid grid-cols-5 gap-4">
        {numbers.map((num)=>{
          //ekrana basılan numara stockta var mı?
          const inStock= item.size.split(",").includes(num);

          //numra seçili mi

          const found =selected===num;

        return (
        <button
         onClick={()=>toogle(num)}
         disabled={!inStock}
         type="button" 
         className={`py-2 px-4 lg:px-0 text-center rounded-md cursor-pointer transition hover:bg-zinc-400 
        disabled:bg-[#D2D1D] disabled:text-[#8F8C91] ${found ? "bg-black text-white":"bg-white"} `}>
          {num}
          </button>
        );
        })}
      </div>
    </div>
  )
}

export default Size;
