import React, { Component } from 'react'
import { format } from 'date-fns'

export class Movie extends Component {
  state = {
    movieList: [],
  }

  componentDidMount() {
    fetch(
      'https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=a2a82544ba0aad2945926880c754faab'
    )
      .then(response => {
        console.log(response)
        return response.json()
      })
      .then(movie => {
        movie.results.sort(
          (a, b) => Date.parse(a.release_date) - Date.parse(b.release_date)
        )
        this.setState({
          movieList: movie.results,
        })
      })
  }

  render() {
    return (
      <ul>
        {this.state.movieList.map(movie => {
          return (
            <li key={movie.id}>
              <section className="movie-images">
                <img
                  src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.poster_path}`}
                />
              </section>
              <section className="movie-text">
                <h2>{movie.title}</h2>
                <h3>Release Date</h3>
                <p>{movie.release_date}</p>
                <h3>Overview</h3>
                <p>{movie.overview}</p>
              </section>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default Movie
