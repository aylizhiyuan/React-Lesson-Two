import React from 'react';
import {Route,Redirect} from '../react-router-dom';
//设置一个受保护的路由，判断用户是否有权限登录或者是右权限
export default ({component:Component,...rest})=>(
  <Route {...rest} render={(props) => (
    localStorage.getItem('logined')? <Component {...props} />:<Redirect to={{pathname:'/login',state:{from:props.location.pathname}}}/>
  )
  }/>
)
// 我们想对一些路由进行屏蔽,例如登录后才能访问,这里我们在本地存一个变量来表示是否登录,增加一个登录路由，点击登录按钮将本地变量改为登录成功状态,即可以访问用户列表页面
// 我们匹配到/user路由时要根据状态判断是否有权限，如果没权限需要跳转到登录页面，主要靠的是高阶组件的思想来实现:
//   Redirect组件是用来重定向的，我们新增from属性来记录当前匹配的url,为了保证登录后可以在跳回到当前匹配的路径
// 我们发现默认点击profile会默认跳转到Login组件中，点击登录可以再次跳回Profile。这样我们就实现了受保护的路由。


//使用的时候直接用Protected来代替route标签即可