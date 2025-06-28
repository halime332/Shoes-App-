import type { FC } from "react";
import Badge from "../card/badge";
import type { Shoe } from "../../types";


interface Props{
  item:Shoe;
}

const Head:FC<Props> = ({item}) => {
  return (
    <div>
     <Badge item={item}/>
     <h1>{item.name}</h1>
    </div>
  )
};

export default Head;
