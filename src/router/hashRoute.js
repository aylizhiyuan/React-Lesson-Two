import React, { Component } from 'react';
import PropTypes from 'prop-types';
//其实就是当hash的值改变的时候，我们通过Router容器，将当前的hash值传递给route
//另外也添加了history.push方法方便我们进行路由的跳转
export default class HashRouter extends Component {
  static childContextTypes = {
    location: PropTypes.object,
    history: PropTypes.object
  }
  constructor(props) {
    super(props);
    this.state = { location: { pathname: window.location.hash.slice(1) || '/',state:{} } };
  }
  getChildContext() {
    let that = this;
    return {
      location: this.state.location,
      history: {
        push(path) {
          if (typeof path=='object') {
            let {pathname,state}=path;
            that.setState({
              location: {...that.state.location,state}
            },() => {
              console.log('this.state.location.state',that.state.location.state);
              window.location.hash=pathname;
            });
          } else {
            window.location.hash=path;
          }
        }
      }
    }
  }
  componentDidMount() {
    window.location.hash = window.location.hash || '/';
    let render = () => {
      this.setState({ location: {...this.state.location,pathname: window.location.hash.slice(1) || '/' } });
    }
    window.addEventListener('hashchange', render);
  }
  render() {
    return this.props.children;
  }
}