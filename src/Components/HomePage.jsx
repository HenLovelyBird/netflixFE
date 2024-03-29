import React from 'react';
import { Container } from "reactstrap"
import MovieList from './MovieList';
// import TestLifeCycle from './TestLifeCycle';
// import MovieDetails from './MovieDetails';
// import ShowDetail from './ShowDetail';
// import ShowDetail from './ShowDetail';


class Main extends React.Component {
    state = { 
        movies: [],
    }

    
    render() {
        return (<>

            {/* <TestLifeCycle /> */}

            <Container flex>
                {this.state.movies && this.state.movies.map((movie, index) =>
                    <MovieList movies={movie} key={index} title={movie.Title} movieGenre={movie.Type} img={movie.Poster}/>)}
                {/* <MovieList movies={this.state.movies} title="Harry Potter"></MovieList> */}
                {/* {this.state.movies.map((movie, index) => <img className="col-md-3" alt={"movie poster for" + movie.Title} src={movie.Poster} key={index} />)} */}
            </Container>
        </>);
    }

    componentDidMount = async () => {
        const resp = await fetch ("http://netflixbefe.herokuapp.com/movies",{
            method: "GET"
            
        })
        const moviesFromBE = await resp.json();
        console.log(moviesFromBE);
        this.setState({
            movies: moviesFromBE
        });
    }


    // componentDidMount = async () => {
    //     let movieTitles = ["Avengers"];

    //     movieTitles.forEach(async movie => {
    //         let response = await fetch("http://www.omdbapi.com/?apikey=24ad60e9&s=" + movie);
    //         let movieResult = await response.json();
    //         // console.log('MOVIERESULT', movieResult)
    //         this.setState({
    //             movies: [...this.state.movies, {items: movieResult.Search, title: movie }]
    //         }, () => {console.log('and here?', this.state.movies)});
    //         });
    //     }


    }

    //search result goes here



export default Main;