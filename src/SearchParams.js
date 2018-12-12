import React from 'react';

class Search extends React.Component {
  state = {
    location: "Richmond, VA",
    animal: "",
    breed: ""
  };

  handleLocationChange = event => {
    this.setState({
      location: event.target.value
    });
  };

  handleAnimalChange = event => {
    this.setState({
      animal: event.target.value
    });
  };

  render() {
    return (
      <div className="search-params">
       <label htmlFor="location">
         Location
         <input
           id="location"
           value={this.state.location}
           placeholder="Location"
           onChange={this.handleLocationChange}
         />
       </label>
     </div>
    )
  }
}

export default Search;
