import React from 'react';
class WindowWidth extends React.Component {
  constructor(props) {
     super(props);
     this.state = { windowWidth: window.innerWidth };
   }
 
  handleResize = (e) => {
   this.setState({ windowWidth: window.innerWidth });
  };
 
  componentDidMount() {
   window.addEventListener("resize", this.handleResize);
  }
 
  componentWillUnmount() {
   window.addEventListener("resize", this.handleResize);
  } 
 
   render() {
     const { windowWidth } = this.state; 
     return <div>Current window width: {windowWidth}</div>
   }
 }
 export default WindowWidth;