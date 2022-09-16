import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import './Buscador.css';
import { addMovieFavorite, getMovies } from "../../actions";
//import store from "../../store";

//home-dnd buscamos las peli, llamando a la API, 
//y las mostramos en forma de lista

export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
   


  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    //falta codigo? el getMovie a la API-LISTO
    this.props.getMovies(this.state.title);
    this.setState({title :""}); //pongo el buscador vacio
  }
  componentDidMount() {       //REPASAR
    //const { match: { params: { id }}} = this.props;
    this.props.getMovies (this.props);
} 

  render() {
    const { title } = this.state;
    console.log(this.props)
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              className="input"
              type="text"
              placeholder="Ingrese su pelicula"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit" className="button">BUSCAR</button>
        </form>
        <ul className="list-container">
         {
          this.props.movies && this.props.movies.map (movie => 
            <li key={movie.imdbID} className="list-movie">
              <NavLink className="link" to={`/movie/${movie.imdbID}`}>{movie.Title}</NavLink>
              <div className="imagen">
               <img  src={movie.Poster} alt="Img Not Fond"/>
               <button className="button-fav" onClick={() => this.props.addMovieFavorite({title: movie.Title, id: movie.imdbID, imagen: movie.Poster})}>👍</button>
              </div>
              
            </li>
          )
         }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) { //PIDO LA PORCION DE ESTADO QUE NECESITO
  return {
    movies: state.moviesLoaded //MOVIES LE PUEDO PONER EL NOMBRE QUE YO QUIERA, PERO DSP AL LLAMARLO ARRIVA DEBO VER Q SEA ESTE NOMBRE
  };
}
function mapDispatchToProps(dispatch) { //RECIBE LA POSIBILIDAD DE DISPARAR ACCIONES
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)), //ESTE MOVIE, ES LO MISMO QUE PONER E=>DISPATCH
    getMovies: title => dispatch(getMovies(title))
    //PONGO LO QUE NECESITE EN ESTE COMPONENTE, ADDMOVIE PARA PASAR DE CARGADO A FAVORITO
    //GETMOVIE PARA DESPACHAR LA ACCION DE PEDIR LAS PELICULAS
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buscador);