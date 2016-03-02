import React from 'react';

const MyReactComponent = React.createClass({

  render() {

    return (
      <h1>Hello {this.props.name}</h1>
    );
  }
});

export default MyReactComponent;