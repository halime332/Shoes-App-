import type { FC } from "react";
import { useState } from "react";
import type { Shoe } from "../../types";
import { Link } from "react-router-dom";
import Price from "./price";
import Badge from "./badge";

interface Props {
  item: Shoe;
}
const Card: FC<Props> = ({ item }) => {
  const [imageError, setImageError] = useState(false);
  
  // Eğer görsel yüklenemiyorsa kartı gösterme
  if (imageError || !item.picture?.[0]?.trim()) return null;
  return (
    <div className="flex flex-col justify-between">
      <div>
        <div className="relative p-2 bg-white rounded-3xl overflow-hidden">
          <Badge item={item} />
          <div className="w-full h-[300px]">
            <img
              src={item.picture[0]}
              alt={item.name}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>
        <h2 className="font-bold line-clamp-2 my-4 lg:text-[20px] xl:text-[24px]">
          {item.name}
        </h2>
      </div>
      <Link
        to={`/shoes/${item._id}`}
        className="bg-dark-gray text-white font-medium px-4 py-2 rounded-[8px] transition hover:bg-black text-center flex items-center justify-center gap-1"
      >
        Detay - <Price item={item} />
      </Link>
    </div>
  );
};
export default Card;
