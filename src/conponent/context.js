import React,{Component} from "react"
import ReactDOM from "react-dom"
import PropTypes from 'prop-types'
class Header extends Component {
  render(){
    return (
      <div>
        <Title/>
      </div>
    )
  }
}
class Main extends Component {
  render(){
    return (
      <div>
        <Content/>
      </div>
    )
  }
}
class Title extends  Component {
  static contextTypes = {
    color:PropTypes.string,
    setColor:PropTypes.func
  }
  render(){
    //可以拿到this.context
    return (
      <div>
        <h1 style={{color:this.context.color}}>我是标题</h1>
        <button onClick={()=>this.context.setColor('green')}>变绿</button>
        <button onClick={()=>this.context.setColor('yellow')}>变黄</button>
      </div>
    )
  }
}
class Content extends  Component {
  render(){
    return (
      <div>
        <p>我是内容</p>
      </div>
    )
  }
}
//1.在父组件中定义childContextTypes
//2.在父组件中定义一个getChildContext用来返回上下文
//3.子组件中如何接受呢？通过contextTypes
export default class Context extends Component {
  //你需要传递哪些数据就在这里写就行了
  static childContextTypes = {
    color:PropTypes.string,
    setColor:PropTypes.func
  }
  getChildContext(){
    return {
      color:this.state.color,
      setColor:this.setColor
    }
  }
  setColor = (color)=>{
    this.setState({color})
  }
  constructor(){
    super();
    this.state = {color:'red'}
  }
  render(){
    return (
      <div>
        <Header/>
        <Main/>
      </div>
    )
  }
}