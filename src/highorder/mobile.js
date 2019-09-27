import React,{Component} from "react"
import local from "./local"
class Mobile extends Component {
  render(){
    return (
      <label>手机 <input value={this.props.data} onChange={this.props.save}/><br/></label>
    )
  }
}
export default local(Mobile)