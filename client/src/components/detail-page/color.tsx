import type { FC } from "react"
import type { Shoe } from "../../types"


interface Props {
    item:Shoe;
}

const Color:FC<Props> = ({item}) => {
  return (
    <div>
      Color
    </div>
  )
};

export default Color;
