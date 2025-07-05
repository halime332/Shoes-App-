import type { FC } from "react";


const Images: FC<{ item: any }> = ({ item }) => {
  return (
    <div className="flex gap-4">
      {item.picture.map((pic: string, i: number) => (
        <img
          key={i}
          src={`http://localhost:5001/${pic}`}
          alt={`shoe ${i}`}
          className="w-40 h-40 object-cover rounded"
        />
      ))}
    </div>
  );
};
export default Images;