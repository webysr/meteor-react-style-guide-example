import React from 'react';

const FavouriteNumber = React.createClass({

  render() {

    return (
      <div>
        <h1>Hello {this.props.name}!</h1>
        <p>Your favourite number is: {this.props.favouriteNumber}</p>
      </div>
    )
  }
});

export default FavouriteNumber;