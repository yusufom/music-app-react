import React, { Component } from 'react'
import "./css/SearchResult.css"
import Tracklist from './Tracklist'

class SearchResults extends Component {
  render() {
    return (
      <div className='SearchResults'>
        <h2>Results</h2>
        <Tracklist tracks={this.props.SearchResults} onAdd={this.props.onAdd} />
      </div>
    )
  }
}

export default SearchResults