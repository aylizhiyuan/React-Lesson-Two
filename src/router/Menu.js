import React from 'react';
import {Route,Link} from './react-router-dom'
import './MenuLink.css'
export default ({to,children})=>{
  return <Route path={to} children={(props) => {
    return <li className={"nav-item "+(props.match?"active":"")}><Link to={to} className="nav-link">{children}</Link></li>
  }}/>
}
//自定义菜单的高阶组件，自己可以试试，哈哈哈哈

//其实感觉就是高阶组件根据不同的参数，执行不同的操作