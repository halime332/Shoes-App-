import type { FC } from "react";
import Badge from "../card/badge";
import type { Shoe } from "../../types";


interface Props{
  item:Shoe;
}

const Head:FC<Props> = ({item}) => {
  let price =item.price;

  if(item.discount){
    price=(price*(100-item.discount)) /100;
  }
  return (
    <div>
     <Badge item={item}/>
     <h1 className="font-semibold text-[24px] md:text-[28px] lg:text-[32px] mt-[55px]">{item.name}</h1>

     <p className="text-[20px] md:text-[24px] mt-4">
      <span className="text-my-blue">${price}</span>
      {item.discount &&  <span className="line-through ps-3">${item.price}</span> }
     
     </p>
    </div>
  )
};

export default Head;
