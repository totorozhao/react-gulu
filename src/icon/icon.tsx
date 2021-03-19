import React from "react"
import "../icons/strawberry.svg"
import "../icons/cherry.svg"
import "../icons/pear.svg"
import "../icons/orange.svg"

interface IconProps {
  name: string
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <span>
      <svg>
        <use xlinkHref={`#${props.name}`}></use>
      </svg>
    </span>
  )
}

export default Icon
