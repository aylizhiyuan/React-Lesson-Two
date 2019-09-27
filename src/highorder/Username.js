import React,{Component} from "react"
import local from "./local"
class Username extends Component {
  render(){
    return (
      <label>用户名 <input value={this.props.data} onChange={this.props.save}/><br/></label>
    )
  }
}
export default local(Username)