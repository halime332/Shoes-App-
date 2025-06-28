import type { FC } from "react"
import type { Shoe } from "../../types";


interface Props {
  item:Shoe;
}


const Size:FC<Props> = ({item}) => {
  return (
    <div>
      Size
    </div>
  )
}

export default Size;
