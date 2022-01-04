import React, { Component } from 'react'
import FetchData from './Components/FetchData'
import CustomPagination from './Components/CustomPagination/CustomPagination';
import CircularProgress from '@mui/material/CircularProgress';

import "./App.css"

export class App extends Component {
  constructor(props){
    super(props);
    this.state={Mdata:[],
    CurrentPage:1
};
}

setPage=(page)=>{
  this.setState({CurrentPage:page},()=>{
    this.FetchData_fetch();
  });
}
async FetchData_fetch(){
  const ans=await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=b341f65f7831bca4d2c7dae31d4194db&page=${this.state.CurrentPage}`);
  const { results }=await ans.json();
  console.log(`https://api.themoviedb.org/3/trending/all/day?api_key=b341f65f7831bca4d2c7dae31d4194db&page=${this.state.CurrentPage}`);
  console.log(results);
  this.setState({Mdata:results});
}
componentDidMount(){
    this.FetchData_fetch();
}
  render() {
    return (
      <div>
        <h1 style={{position:"sticky"}} className='d-flex justify-content-center' onClick={()=>{window.scroll(0,0)}} >Treanding</h1>
        <div className='App container'>
          {
            this.state.Mdata.length?
          this.state.Mdata.map(ele =>{
          return <FetchData
              key={ele.id}
              pic={`https://image.tmdb.org/t/p/w300${ele.poster_path}`}
              name={ele.title || ele.name}
              date={ele.release_date || ele.first_air_date}
              type={ele.media_type}
              rating={ele.vote_average}
              />;
          }):<CircularProgress />}
          <CustomPagination setPage={this.setPage} page={this.CurrentPage}/>
        </div>
      </div>
    )
  }
}

export default App
