import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import './Favorites.css';
import { removeMovieFavorite } from "../../actions";

//mostramos las peli seleccionadas como FAV
export class ConnectedList extends Component {


  render() {
    return (
      <div>
        <h2>Tus Películas Favoritas</h2>
        
      
        <ul className="list-container">
          {
          this.props.favorites && this.props.favorites.map (movie => 
            <li key={movie.imdbID}>
              <NavLink className="link" to={`/movie/${movie.id}`}>{movie.title}</NavLink>
              <img src={movie.imagen} alt={"img not found"} />
              <button className="button" onClick={() => this.props.removeMovieFavorite(movie.id)}>Eliminar</button>
            </li>
          )
         }
        </ul>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    favorites: state.moviesFavourites,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite: movie => dispatch(removeMovieFavorite(movie)),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedList);
