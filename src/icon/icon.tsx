import React from "react"
// import "../icons/strawberry.svg"
// import "../icons/cherry.svg"
// import "../icons/pear.svg"
// import "../icons/orange.svg"
import './importIcons'

import './icon.scss'
interface IconProps {
  name: string;
//   onClick: React.MouseEventHandler<SVGAElement>
  onClick: ()=>void
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
      <svg className='zui-icon' onClick={props.onClick}>
        <use xlinkHref={`#${props.name}`}></use>
      </svg>
  )
}

export default Icon
