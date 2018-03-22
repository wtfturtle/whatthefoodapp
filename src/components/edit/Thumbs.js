import React, { Component } from 'react';
import { connect } from 'react-redux';
import up from './assets/tup.jpg';
import upclick from './assets/tup-green.jpg';
import down from './assets/tdown.jpg';
import downclick from './assets/tdown-red.jpg';

class Thumbs extends Component {



  render() {

    return (
      <div>
        <h4>Do you like this place?</h4>
        {up ? upclick : up}
        {down ? downclick : down}
      </div>
    );
  }
}

export default connect(
  null,
  null
)(Thumbs);