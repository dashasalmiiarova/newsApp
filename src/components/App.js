import React from 'react';

import '../style.css';

import Header from '../components/Header/Header';
import RandomNews from './RandomNews/RandomNews';
import NewsItem from './NewsItem/NewsItem';

export default class App extends React.Component{
  render(){
    return(
      <div>
        <div>
          <Header />
          <RandomNews />
          <NewsItem />
        </div>
      </div>
    )
  }
}
