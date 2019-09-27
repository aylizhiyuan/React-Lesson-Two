import React,{Component} from "react"
import ReactDOM from "react-dom"
import Username from './Username'
import Mobile from "./mobile"
//高阶组件的作用就是复用组件，将当前组件复用比较合适
export default class Memo extends Component {
  render(){
    return (
      <form>
        <Username/>
        <Mobile/>
        留言 <textarea></textarea>
      </form>
    )
  }
}