import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRandom } from './actions';
import { search } from '../../services/foursquareApi';
import { saveResults } from '../results/actions';
import { saveQuery } from '../search/actions';

class Random extends Component {

  handleClick = () => {
    const randomizer = this.props.getRandom().payload;
    this.props.saveQuery({ query: randomizer });
    search({ query: randomizer })
      .then(res => {
        this.props.saveResults([res.response.groups[0].items[Math.floor(Math.random() * 30)]]);
      }
      );
  };

  render() {

    return (
      <div>
        <button onClick={this.handleClick}>Im not good at making decisions</button>
      </div>
    );
  }
}

export default connect(
  state => ({ randomSearch: state.randomSearch }),
  ({ getRandom, saveResults, saveQuery })
)(Random);