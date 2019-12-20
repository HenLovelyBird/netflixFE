import React from 'react';

class MovieDetails extends React.Component {
    render() {
      let movie = this.props.movie;
      // console.log('ONE OF THESE IS UNDEFINED', this.props.movie)
        return (
             <div className="col-md-3">
               <img style={{width: "100%"}} 
                src={movie.Poster} 
                alt={"movie poster for" + movie.Title} />
                <span>{movie.Title}</span> 
            </div>
            );
          }
}

export default MovieDetails;


