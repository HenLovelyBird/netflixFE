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
                {this.props.movies.map((movie, index) =>
                <MovieDetails movie={movie} key={index} />
                )}
            </Row>
        </Row>
    </>);
}
}




export default MovieList;