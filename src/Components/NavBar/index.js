import React, { Component } from 'react';
import "./sample.css";

export class NavBar extends Component {
	constructor(props) {
		super(props);
		this.state = { windowWidth: window.innerWidth ,toggle:false,SearchData:[]};
		const Search="";
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
	HandleChange=(e)=>{
		this.Search=e.target.value;
		if(this.Search.length){
		this.props.SearchCon(this.Search);
		}
	}
	HandleSearch=()=>{
		console.log(this.state.SearchData.length);
		// this.Fetch_Search();
	}
    HandleClick=(e)=>{
        this.props.fun(e.target.textContent);
    }
	HandleToggle=()=>{
		this.setState({toggle:this.state.toggle?false:true});
	}

	// async Fetch_Search(){
	// 	const req=await fetch(`https://api.themoviedb.org/3/search/company?api_key=b341f65f7831bca4d2c7dae31d4194db&query=${this.Search}`);
	// 	const res=await req.json();
	// 	this.setState({SearchData:res.results});
	// }

	render() {
		const IsToggled=this.state.toggle;
		const Width=this.state.windowWidth;
		return (
			<>
				<div className="Movie-Container">
					<div className="Movie-Heading">
					<div className="Heading">
						<h1>GoGoMovies</h1>
					</div>
					<div className="Bar-Btn">
						<button className="Hbar" onClick={this.HandleToggle}><i className="fas fa-bars" /></button>
					</div>
				</div>
						{
							(Width>992 || IsToggled)?
								<>
								    <div className="Movie-Pages">
										<div className>
											<p onClick={this.HandleClick}>Trending</p>
										</div>
										<div className>
											<p onClick={this.HandleClick}>Movies</p>
										</div>
										<div className>
											<p onClick={this.HandleClick}>Tv Shows</p>
										</div>
										</div>
										<div className="Movie-Search-op">
										<div className="For-Pushing-Right">
											<input className="Submit-St" onChange={this.HandleChange} placeholder="Search" type="search" />
											<button className="Btn-Custome" onClick={this.HandleSearch} type="submit">Search</button>
										</div>
									</div>
								</>:<></>
						}
					</div>
			</	>
		);
	}
}
export default NavBar;
