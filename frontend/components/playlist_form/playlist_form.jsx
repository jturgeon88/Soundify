import React from 'react';


class PlaylistForm extends React.Component {


  update(property) {
    return e => this.setState({
      [property]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createBench(bench);
    this.navigateToSearch();
  }

  render () {
    return (
      <div className="playlist-form-modal">
      </div>
    )
  }
}
