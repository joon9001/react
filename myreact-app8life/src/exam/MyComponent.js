import React from "react";

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
      console.log('Constructor');
    }
  
    static getDerivedStateFromProps(props, state) {
      console.log('getDerivedStateFromProps');
      return null;
    }
  
    componentDidMount() {
      console.log('componentDidMount');
    }
  
    render() {
      console.log('Render');
      return <div>{this.state.count}</div>;
    }
  }

  export default MyComponent;