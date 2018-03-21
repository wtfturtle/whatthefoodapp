import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './result.css';
import { loadList } from '../user/actions';
import Result from './Result';

class Results extends Component {

  componentDidMount() {
    if(this.props.user) {
      this.props.loadList();
    }
  }

  render() {
    
    const { results, user } = this.props;

    return (
      <Fragment>
        {results ? 
          <ul className="result-ul">
            {results.map((result, index) => <Result key={index} {...result} user={user}/>)}
          </ul>
          : null
        }
      </Fragment>
    );
  }
}

export default connect(
  state => ({ 
    results: state.results, 
    user: state.user,
    listResults: state.listLoad }),
  ({ loadList })
)(Results);