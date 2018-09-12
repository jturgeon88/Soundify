import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: ''
    }

    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    this.props.fetchSongs();
  }

  handleInput(event) {
    this.setState({inputVal: event.currentTarget.value});
  }

  matches() {
    const matches = [];
    if (this.state.inputVal.length === 0) {
      return ["Search Soundify"];
    }

    this.props.songs.forEach(song => {
      const sub = song.name.slice(0, this.state.inputVal.length);
      if (sub.toLowerCase() === this.state.inputVal.toLowerCase()) {
        matches.push(song.name);
      }
    });

    if (matches.length === 0) {
      matches.push('No matches');
    }

    return matches;
  }

  render() {
    const results = this.matches().map((result, i) => {
      return (
        <li key={i}>{result}</li>
      );
    });

    return (
      <div className="search-container">
        <form>
          <input
            onChange={this.handleInput}
            value={this.state.inputVal}
            placeholder="Search..." />
        </form>
        <div className="search-results">
          <ul>
            {results}
          </ul>
        </div>
      </div>
    );
  }
}

export default Search;
