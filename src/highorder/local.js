import React,{Component} from "react"
export default function(OldComponent,name,placeholder){
  //创建一个新的组件，在这个新组件中返回老组件的值
  class NewComponent extends Component {
    constructor(){
      super();
      this.state = {data:''}
    }
    componentDidMount() {
      this.setState({data:localStorage.getItem(name)||placeholder})
    }

    handleChange = (event)=>{
      localStorage.setItem(name,event.target.value);
    }
    render() {
      return <OldComponent data={this.state.data} save={this.handleChange}/>
    }
  }
  return NewComponent
}