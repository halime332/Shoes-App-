import type { FC } from "react"
import type { Shoe } from "../../types";

interface Props{
  item:Shoe;
};

const Images:FC<Props> = () => {
  return (
    <div>
      Images
    </div>
  )
}

export default Images;
