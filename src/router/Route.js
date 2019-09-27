import React,{Component} from 'react';
import PropTypes from 'prop-types';
import pathToRegexp from 'path-to-regexp';
//它的主要作用就是从context中拿到location当前地址信息和history对象
//然后根据当前的路径信息来判断到底是加载哪个组件还是显示自己里面的内容
export default class Route extends Component{
  static contextTypes = {
    location:PropTypes.object,
    history:PropTypes.object
  }
  constructor(props){
    super(props);
    this.path = props.path;
    this.keys = [];
    this.regexp = pathToRegexp(this.path,this.keys,{end:false});
    this.keys = this.keys.map(key=>key.name);
  }
  render() {
    let self=this;
    let {path,component:Component,render,children}=this.props;
    let {location}=self.context;//得到路径
    let result=location.pathname.match(self.regexp);
    let props={
      location,
      history:this.context.history
    }
    if (result) {
      let [url,...values]=result;
      let match={
        url,
        path,
        params: self.keys.reduce((memo,key,index) => {
          memo[key.name]=values[index];
          return memo;
        },{})
      }
      props.match=match;
      if (render) {
        return render(props);
      } else if (Component) {
        return <Component {...props}/>;
      } else if (children) {
        return children(props);
      }else {
        return null;
      }
    } else if (children) {
      return children(props);
    } else {
      return null;
    }
  }
}