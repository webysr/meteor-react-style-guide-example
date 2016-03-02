import React from 'react';

const HelloName = React.createClass({

  render() {

    return (
      <h1>Hello {this.props.name}</h1>
    );
  }
});

export default HelloName;