import ReactDom from "react-dom"
import React from "react"
import Icon from "./icon/icon"


const fn = ()=>{
    console.log('下载中....')
}

ReactDom.render(
  <div>
    {/* <Icon name="strawberry"></Icon>
    <Icon name="orange"></Icon>
    <Icon name="pear"></Icon> */}
    <Icon name="falling" onClick={fn}></Icon>
  </div>,
  document.querySelector("#root")
)
