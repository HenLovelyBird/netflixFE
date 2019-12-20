import React from 'react';
import { Container, Row} from "reactstrap"
import HomePage from './HomePage';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';
import NavHead from './NavHead';
import ShowDetail from './ShowDetail';
import { BrowserRouter as Router, Route } from "react-router-dom";

class Main extends React.Component {
  state = { 
    searchString: "", 
    artists: {},
    movies: {}
}
searchString = ev => {
  this.setState({
    searchString: ev.target.value.toLowerCase()
  });
};

searchMovies = async () => {
  let response = await fetch("http://www.omdbapi.com/?apikey=24ad60e9&s=" + this.state.searchString);
  let movieResult = await response.json();
  this.setState({movies: movieResult.Search}, () => console.log(this.state))
}
  render() {
    return (
      <Router>
        {/* everypage: */}
        <NavHead
          searchMovies={this.searchMovies}
          saveSearchString={this.searchString}
          searchValue={this.state.searchString}
        />
        
        
        {/* dir of pages: */}
        {Object.entries(this.state.movies).length !== 0 && (
          // when the entries from the object(movie results array) are less than zero and print these things:
          <>
          <h3>Search ResultS</h3>
          {/*here map the content of this.state.movies.movies*/}
          <Row>
            {this.state.movies.map((movie, index) =>
            <div className="col-md-3">
               <img style={{width: "100%"}} 
                src={movie.Poster} 
                alt={"movie poster for" + movie.Title} />
            <span>{movie.Title}</span></div>)};
          </Row>
       </> )}      
       {/* {console.log('ACTUAL STATE', this.state)} */}
        <Container>
          <Row>
            <Route path="/" exact component={HomePage} />
            <Route path="/MovieDetails" component={MovieDetails} />
            <Route path="/ShowDetail/:allMovieDetails" component={ShowDetail} />
          </Row>
          footer
        </Container>
      </Router>
    );
  }
}

export default Main;