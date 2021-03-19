import ReactDom from "react-dom"
import React from "react"
import Icon from "./icon/icon"

ReactDom.render(
  <div>
    <Icon name="strawberry"></Icon>
    <Icon name="orange"></Icon>
    <Icon name="pear"></Icon>
    <Icon name="cherry"></Icon>
  </div>,
  document.querySelector("#root")
)
