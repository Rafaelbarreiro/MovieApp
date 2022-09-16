import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';
//componente dnd se muestra la peli en detalle
//aqui accedo dsd BUSCADOR o FAVORITOS
class Movie extends React.Component {

    componentDidMount() {       //REPASAR
        //const { match: { params: { id }}} = this.props;
        this.props.getMovieDetail (this.props.match.params.id);
    }
    
    render() {
        return (
            <div  >
                <h1 className="description">Detalles de la pelicula</h1> 
                {this.props.movie?
                <div className="movie-detail">
                  <div>
                    <h2>{this.props.movie.Title} </h2>
                    <h3>Descripcion: {this.props.movie.Plot} </h3>
                    <h3>Genero: {this.props.movie.Genre} </h3>
                    <h3>Año: {this.props.movie.Year} </h3>
                    <h3>Clasificación: {this.props.movie.Rated} </h3>
                  </div>
                  <img src={this.props.movie.Poster} alt={"img"} />
                </div>
              : <h3>Cargando...</h3>
                } 
            </div>
           
        );
    }
}

function mapStateToProps(state) {
    return {
      movie: state.movieDetail
    };
  }
  function mapDispatchToProps(dispatch) {
    return {
      getMovieDetail: id => dispatch(getMovieDetail(id))
    };
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (Movie);