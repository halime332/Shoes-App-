import type { FC } from "react"
import type { Shoe } from "../../types";

interface Props {
  item:Shoe;
}


const Foot:FC<Props> = ({item}) => {
  return (
    <div>
      Foot
    </div>
  )
};

export default Foot;
