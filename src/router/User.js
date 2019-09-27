import React,{Component} from 'react'
import {BrowserRouter as Router,Route,Link} from "react-router-dom"
class UserAdd extends Component {
  handleSubmit = (event)=>{
    event.preventDefault();
    let username = this.username.value;
    let user = {id:Date.now(),username};
    let userStr = localStorage.getItem("users");
    let users = userStr ? JSON.parse(userStr):[];
    users.push(user);
    localStorage.setItem('users',JSON.stringify(users));
    this.props.history.push('/user/list')
  }
  render(){
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <label>用户姓名</label>
        <input ref={input=>this.username=input} type="text" placeholder="请输入姓名"/>
        <input type="submit" value="提交"/>
      </form>
    )
  }
}
class UserList extends Component {
  constructor(){
    super();
    this.state = {users:[]};
  }
  componentDidMount() {
    let userStr = localStorage.getItem("users");
    let users = userStr ? JSON.parse(userStr):[];
    this.setState({users});
  }
  render(){
    return (
      <ul>
        {
          this.state.users.map((user,index)=>(
            <li key={index}><Link to={"/user/detail/" + user.id}>{user.username}</Link></li>
          ))
        }
      </ul>
    )
  }
}
class UserDetail extends Component {
  constructor(){
    super();
    this.state = {user:{}};
  }
  componentDidMount() {
    let userStr = localStorage.getItem('users');
    let users = userStr ? JSON.parse(userStr):[];
    let user = users.find(user=>user.id == this.props.match.params.id);
    this.setState({user});
  }
  render(){
    return (
      <div>
        {this.state.user.id} : {this.state.user.username}
      </div>
    )
  }
}
export default class User extends Component {
  render(){
    return (
      <Router>
        <ul>
          <li><Link to="/user/add">添加用户</Link></li>
          <li><Link to="/user/list">用户列表</Link></li>
        </ul>
        <div>
          <Route path="/user/add" component={UserAdd}/>
          <Route path="/user/list" component={UserList}/>
          <Route path="/user/detail/:id" component={UserDetail} />
        </div>
      </Router>
    )
  }
}