import './App.css';
import Playlist from "./components/Playlist";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Spotify from "./util/Spotify"


import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
       SearchResults: [],
       playlistName: "New Playlist",
       playlistTracks: []
    };
    this.search = this.search.bind(this)
    this.addTrack = this.addTrack.bind(this)
    this.removeTrack = this.removeTrack.bind(this)
    this.updatePlaylistName = this.updatePlaylistName.bind(this)
    this.savePlaylist = this.savePlaylist.bind(this)
    this.removeTrackSearch = this.savePlaylist.bind(this)
    this.doThese = this.doThese.bind(this);
  }

  search(term){
    Spotify.search(term).then(SearchResults => {
      this.setState({SearchResults:SearchResults});
    });
  }

  addTrack(track){
    let tracks = this.state.playlistTracks;
    if(tracks.find(savedTrack => savedTrack.id === track.id)){
      return;
    }
    tracks.push(track);
    this.setState({playlistTracks: tracks})
  }

  removeTrack(track){
    let tracks = this.getSnapshotBeforeUpdate.playlistTracks;
    let trackSearch = this.state.SearchResults;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
    trackSearch.unshift(track);
    this.setState({playlistTracks: tracks})
  }

  removeTrackSearch(track){
    let tracks = this.state.SearchResults;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
    this.setState({searchResults:tracks});
  }

  doThese(track){
    this.addTrack(track);
    this.removeTrackSearch(track);
  }

  updatePlaylistName(name){
    this.setState({updatePlaylistName: name})
  }

  savePlaylist(){
    const trackUrls = this.state.playlistTracks.map(track => track.url);
    Spotify.savePlaylist(this.state.playlistName, trackUrls).then( () => {
      this.setState({
        updatePlaylistName: "New Playlist",
        playlistTracks:[]
      })
    })
  }

  
  render() {
    return (
      <div>
        <h1>
          <a href="http://localhost:3000">Musicophile</a>
        </h1>

        <div className='App'>
          <SearchBar onSearch={this.search} />
          <div className='App-playlist'>
            <SearchResults searchResults={this.state.searchResults} onAdd={this.doThese} />
            <Playlist playlistTracks={this.state.playlistTracks} onnameChange={this.updatePlaylistName} onRemove={this.removeTrack} onSave={this.savePlaylist} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
