import React, { Component } from 'react'

export class Clock extends Component {
    constructor(props){
        super(props);
        this.state={date:new Date()};
    }
    componentDidMount(){
            this.timeId=setInterval(()=>{
                this.setState({date:new Date()})
            },1000);
    }
    componentWillUnmount(){
        clearInterval(this.timeId);
    }
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <p>{this.state.date.toLocaleTimeString()}</p>
            </div>
        )
    }
}

export default Clock;