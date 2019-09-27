import React,{Component} from 'react';
import PropTypes from 'prop-types';
import pathToRegexp from 'path-to-regexp';
export default class Switch extends Component{
  static contextTypes={
    location: PropTypes.object
  }
  render() {
    let children=this.props.children;
    let {pathname}=this.context.location;
    for (let i=0;i<children.length;i++){
      let child=children[i];
      let {path}=child.props;
      if (match(pathname,path)){
        return child;
      }
    }
    return null;
  }
}
function match(pathname,path) {
  return pathToRegexp(path).test(pathname);
}