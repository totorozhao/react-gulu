import React from 'react'
import  '../icons/strawberry.svg'
  interface IconProps {
      name: string
  }

const Icon:React.FunctionComponent<IconProps> = (props)=>{
    return (
       <span>
           <svg>
               <use xlinkHref="#strawberry"></use>
           </svg>
       </span>
    )
}

export default Icon
