import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search'

const API_KEY = 'AIzaSyD5J85nVjfIo4W2f5KBbInpNLiaJocW9SE';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data){console.log(data);})

//const is ES6/ES2016 syntax
const App = () => {
  return(
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
