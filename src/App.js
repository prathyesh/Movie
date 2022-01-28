import React, { Component } from 'react';
import FetchData from './Components/FetchData';
import CustomPagination from './Components/CustomPagination/CustomPagination';
import CircularProgress from '@mui/material/CircularProgress';
import NavBar from './Components/NavBar';
import 'axios';
import './App.css';

export class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			type: 'all',
			CurrentPage: 1,
			Mdata: []
		};
	}

	changeType = (e) => {
		this.setState({ CurrentPage: 1 }, () => {
			if (e === 'Trending') {
				this.FetchData_fetch();
			} else if (e === 'Movies') {
				this.Fetch_Movie();
			} else {
				this.Fetch_Tv();
			}
		});
	};

	setPage = (page) => {
		this.setState({ CurrentPage: page }, () => {
			if (this.state.type === 'all') {
				this.FetchData_fetch();
			} else if (this.state.type === 'movie') {
				this.Fetch_Movie();
			} else {
				this.Fetch_Tv();
			}
		});
	};
	FetchData_fetch = async () => {
		const ans = await fetch(
			`https://api.themoviedb.org/3/trending/all/day?api_key=b341f65f7831bca4d2c7dae31d4194db&page=${this.state
				.CurrentPage}`
		);
		console.log(ans);
		const { results } = await ans.json();
		this.setState({ Mdata: results, type: 'all' });
	};
	Fetch_Movie = async () => {
		const ans = await fetch(
			`https://api.themoviedb.org/3/discover/movie?api_key=b341f65f7831bca4d2c7dae31d4194db&sort_by=popularity.desc&page=${this
				.state.CurrentPage}`
		);
		console.log(ans);
		const { results } = await ans.json();
		this.setState({ Mdata: results, type: 'movie' });
	};
	Fetch_Tv = async () => {
		const ans = await fetch(
			`https://api.themoviedb.org/3/discover/tv?api_key=b341f65f7831bca4d2c7dae31d4194db&sort_by=popularity.desc&page=${this
				.state.CurrentPage}`
		);
		const { results } = await ans.json();
		console.log(ans);
		this.setState({ Mdata: results, type: 'tv' });
	};
	async Fetch_Search(Search) {
		const req = await fetch(
			`https://api.themoviedb.org/3/search/company?api_key=b341f65f7831bca4d2c7dae31d4194db&query=${Search}`
		);
		const res = await req.json();
		console.table(res.results);
		this.setState({ Mdata: res.results });
	}

	componentDidMount() {
		this.FetchData_fetch();
	}
	render() {
		return (
			<div>
				{/* <ResponsiveAppBar/> */}
				<NavBar fun={this.changeType} SearchCon={this.Fetch_Search.bind(this)} />
				<div className="App container">
					{this.state.Mdata.length ? (
						this.state.Mdata.map((ele) => {
							return (
								<FetchData
									key={ele.id}
									pic={`https://image.tmdb.org/t/p/w300${ele.poster_path || ele.logo_path}`}
									name={ele.title || ele.name}
									date={ele.release_date || ele.first_air_date}
									type={ele.media_type}
									rating={ele.vote_average}
								/>
							);
						})
					) : (
						<CircularProgress />
					)}
					<CustomPagination setPage={this.setPage} page={this.CurrentPage} />
				</div>
			</div>
		);
	}
}

export default App;
