import React, { Component } from 'react'
import "./css/playlist.css"
import Tracklist from './Tracklist'

class Playlist extends Component {

  constructor(props) {
    super(props);

    this.handleNameChange = this.handleNameChange.bind(this)
    
  }

  handleNameChange(event){
    this.props.onNameChange(event.target.value);
  }


  render() {
    return (
      <div className='Playlist'>
        <input onChange={this.handleNameChange} defaultValue={"New Playlist"} />
        <Tracklist track={this.props.PlayListTrack}
        isRemoval = {true}
        onRemove ={this.props.onRemove}/>
        <button className='Playlist-save' onClick={this.props.onSave}>Save to Spotify</button>
      </div>
    )
  }
}

export default Playlist