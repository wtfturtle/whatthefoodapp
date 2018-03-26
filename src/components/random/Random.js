import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRandom } from './actions';
import { search } from '../../services/foursquareApi';
import { saveResults } from '../results/actions';
import { saveQuery } from '../search/actions';

class Random extends Component {

  handleClick = () => {
    // this is app logic, needs to be in actions, not component!
    const randomizer = this.props.getRandom().payload;
    this.props.saveQuery({ query: randomizer });
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