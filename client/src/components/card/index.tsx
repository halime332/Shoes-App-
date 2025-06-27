import type { FC } from "react";
import type { Shoe } from "../../types";
import { Link } from "react-router-dom";
import Price from "./price";
import Badge from "./badge";


interface Props{
  item:Shoe;
}

const Card:FC<Props> = ({item}) => {
  return (
    <div className="flex flex-col justify-between">
      <div>
        <div className="relative p-2 bg-white rounded-3xl">
          <Badge item={item}/>
          <img src={item.picture?.[0] } className="aspect-[9/10] rounded-3xl object-cover  h-[300px] overflow-hidden "/>
        </div>
        <h2 className="font-bold line-clamp-2 my-4 lg:text-[20px] xl:text-[24px]"></h2>
      </div>

      <Link className="bg-dark-gray text-white font-medium px-4
      py-2 rounded-[8px] transition hover:bg-black text-center flex item-center justify-center gap-1" to={`/shoe/${item._id}`}>
       Detay-<Price item={item}/>
      </Link>
    </div>
  );
};

export default Card;
