import React, { Component } from 'react';
import { connect } from 'react-redux';
import './mylist.css';

class MyList extends Component {

  render() {

    return (
      <div>
        list goes here
      </div>
    );
  }
}

export default connect(
  null,
  null
)(MyList);