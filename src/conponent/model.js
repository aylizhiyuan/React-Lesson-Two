import React,{Component} from "react"
import ReactDOM from "react-dom"
class Modal extends Component {
  constructor(){
    super();
    this.container = document.querySelector('#modal-root');
  }
  //我自己的模态框
  render() {
    //感觉有点像合并的意思
    return ReactDOM.createPortal(this.props.children,this.container)
  }
}
export default class Model extends  Component {
  constructor(){
    super();
    this.state = {show:false};
  }
  render(){
    return (
      <div>
        <button onClick={()=>{this.setState({show:!this.state.show})}}>点我弹框</button>
        {
          this.state.show ? <Modal>
            <div className="model-content">
              <h1>显示我的模态框</h1>
            </div>
          </Modal>:null
        }
      </div>
    )
  }
}