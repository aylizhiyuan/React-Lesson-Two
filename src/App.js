import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import User from './router/User'
let Home = ()=><div>首页</div>
let Profile = ()=><div>个人设置</div>
export default class App extends Component{
  render(){
    return (
      <Router>
        <div className="myApp">
          <nav>
            <ul>
              <li><Link to="/home">首页</Link></li>
              <li><Link to="/user">用户管理</Link></li>
              <li><Link to="/profile">个人设置</Link></li>
            </ul>
          </nav>
          <main>
            <div>
              <Route path="/home" component={Home}/>
              <Route path="/user" component={User}/>
              <Route path="/profile" component={Profile}/>
            </div>
          </main>
        </div>
      </Router>

    )
  }
}