import type { FC } from "react";
import type { Shoe } from "../../types";

interface Props {
  item:Shoe;
}
const Images: FC<Props> =({item}) =>{
  return (
    <div className="grid grid-cols-2 gap-4 rounded-[48px] h-fit items-end justify-items-end">
      {item.picture.map((url,key) => (
        <img
         key={key} src={url}
        />
      ))}
    </div>
  );
};
export default Images;