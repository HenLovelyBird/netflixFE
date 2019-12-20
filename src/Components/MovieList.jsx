import React from 'react';
import { Row } from "reactstrap";
import MovieDetails from './MovieDetails'


class MovieList extends React.Component {
    state = { }
    render() {
        // console.log('is this undefined?', this.props.movies)
        return (<>
            <Row>
                <h3>{this.props.title}</h3>
            <Row>
            <div className="col-md-3">
               <img style={{width: "100%"}} 
                src={this.props.movies.Poster} 
                alt={"movie poster for" + this.props.movies.Title} />
                <span>{this.props.movies.Title}</span> 
            </div>
                {/* {this.props.movies && this.props.movies.map((movie, index) =>
                <MovieDetails movie={movie} key={index} /> */}
            </Row>
        </Row>
    </>);
}
}




export default MovieList;