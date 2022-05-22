import logo from './logo.svg';
import './App.css';

import React, {Component} from 'react';
import NavBar from "./Components/NavBar/NavBar";
import NewsItem from "./Components/NewsItem/NewsItem";
import News from "./Components/News/News";

class App extends Component {
  render() {
    return (
        <div>
            <NavBar/>
            <News/>
        </div>
    );
  }
}

export default App;
