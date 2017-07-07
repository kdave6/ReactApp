import React, {Component} from 'react';

class SearchBar extends Component{
  constructor(props){
    //Component class's constructor
    super(props);

    this.state = { term: ' '};
  }

  render(){
  //this input is a controlled element where the value change ONLY if the state changes
  //when value is entered in the input, onChange is called, state is set and then the component
  //is re rendered
    return (
      <div>
        <input
          value = {this.state.term}
          onChange= {(event) => this.setState({term: event.target.value})} />
        Value of the input: {this.state.term}
      </div>
    )
  }
}

export default SearchBar;
