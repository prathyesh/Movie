import React, { Component } from 'react'
import "./FetchData.css"

export class FetchData extends Component {
    constructor(props){
        super(props);
        this.state={data:[],fil:{width:`${this.props.rating*10}%`}};
    }
    render() {
        return (
            <div className="Mcard m-3">
            <div className="image mb-1 "><img src={this.props.pic} alt="" width="100%" /></div>
            <div className="name p-1 mb-2">{this.props.name}</div>
            <div className="rating m-2 p-1">
              <p>Rating: </p>
              <div>
                  <div className="Orating">
                    <div id='star' className="Irating" style={this.state.fil} />
                  </div>
              </div>
            </div>
          </div>
        )
    }
}

export default FetchData;
