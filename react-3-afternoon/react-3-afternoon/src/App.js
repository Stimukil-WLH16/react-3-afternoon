import React, {Component} from 'react';
import './App.css';
import data from './data'

class App extends Component{
  constructor(){
    super()

    this.state = {
      currentIndex: 1
    }
  }

  render(){
    return(
      <div className="App">
        <header className="header-box">Home</header> 
        <body className="main-body-box">
        <div className="inside-body-box">
        <div className="name-box"></div>
          <div className="from-box">From: </div>
          <div className="job-title-box">Job Title: </div>
          <div className="employer-box">Employer: </div>
          <div className="favorite-movies-box">Favorite Movies: </div>
            <ol className="movie-list">
              <li></li>
              <li></li>
              <li></li>
            </ol>
        </div>
        <div className="tool-bar">
          <button className="previous-button" >Previous</button>
            <div className="center-button-group">
              <button className="edit-button">Edit</button>
              <button className="delete-button">Delete</button>
              <button className="new-button">New</button>
            </div>
          <button className="next-button" >Next</button>
        </div>
        </body>
      </div>
    )
  }
}

export default App;