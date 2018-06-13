import React from 'react';


class PlaylistForm extends React.Component {


  update(property) {
    return e => this.setState({
      [property]: e.target.value
    });
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   const bench = Object.assign({}, this.state, this.coords);
  //   this.props.createBench(bench);
  //   this.navigateToSearch();
  // }

  render () {
    return (

    )
  }
}
