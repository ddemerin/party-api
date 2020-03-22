import React, { Component } from 'react'
import Movie from './components/Movie'
import { format } from 'date-fns'

export class App extends Component {
  render() {
    return (
      <>
        <h1>Popular Movies of 1989</h1>
        <Movie />
      </>
    )
  }
}

export default App
