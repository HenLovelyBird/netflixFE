import React from 'react';
import {Row} from 'reactstrap';
import MovieDetails from './MovieDetails';

class ShowDetail extends React.Component {
    state = {
        movie: [],
    }

render () { 
    
if (this.state.movie) {
    // console.log('in showdetail', this.state.movie);
    return ( 
        <Row>
            {/* // should disply ALL the infos from omdblink including comments */}
            <MovieDetails movie={this.state.movie}/>
            {/* <div>{this.state.movie.imdbID}</div> */}
        </Row>
    );
    } else {
        return<div>This Movie is not available at the moment</div>;
        }
    }

//     componentDidMount = async () => {
//         let allMovieDetails = await fetch("http://www.omdbapi.com/?apikey=dbb55456&i=" + imdbID); 
//             allMovieDetails = await allMovieDetails.json();
//             console.log('allMovieDetails', allMovieDetails);
//             this.setState({
//             movie: allMovieDetails
//         });
//     }
}

export default ShowDetail;
