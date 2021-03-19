import React from "react"
// import "../icons/strawberry.svg"
// import "../icons/cherry.svg"
// import "../icons/pear.svg"
// import "../icons/orange.svg"
import './importIcons'

import classes from '../helper/classes'

import './icon.scss'
interface IconProps extends React.SVGAttributes<SVGElement>{
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    const {className,...restProps} = props
  return (
      <svg className={classes('zui-icon',className)}
      {...restProps}
      >
        <use xlinkHref={`#${props.name}`}></use>
      </svg>
  )
}

export default Icon
