import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRandom } from './actions';
import { search } from '../../services/foursquareApi';
import { saveResults } from '../results/actions';
import { saveQuery } from '../search/actions';
// import './mylist.css';

class Random extends Component {

  handleClick = () => {
    search({ query: this.props.getRandom().payload })
      .then(res => {
        this.props.saveResults([res.response.groups[0].items[0]]);
      }
      );
  };

  render() {

    return (
      <div>
        <button onClick={this.handleClick}>randomize search</button>
      </div>
    );
  }
}

export default connect(
  state => ({ randomSearch: state.randomSearch }),
  ({ getRandom, saveResults, saveQuery })
)(Random);