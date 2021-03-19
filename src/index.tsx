import ReactDom from "react-dom"
import React from "react"
import Icon from "./icon/icon"


const fn:React.MouseEventHandler<SVGAElement> = (e)=>{
    console.log(e.target);
}

ReactDom.render(
  <div>
    {/* <Icon name="strawberry"></Icon>
    <Icon name="orange"></Icon>
    <Icon name="pear"></Icon> */}
    <Icon name="falling" 
    className="qqq"
       onClick={fn}
       onMouseEnter={()=>{console.log('enter')}}
       onMouseLeave={()=>{console.log('leave')}}
    ></Icon>
  </div>,
  document.querySelector("#root")
)
