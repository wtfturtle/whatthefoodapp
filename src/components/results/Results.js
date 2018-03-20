import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './result.css';
import Result from './Result';
import { loadResults } from './actions';

class Results extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     results: []
  //   };
  // }

  // componentDidMount() {
  //   this.props.loadResults();
  // }

  render() {

    const { results } = this.props;
    console.log(results);

    return (
      <Fragment>
        {results ? 
          <ul className="result-ul">
            {results.map((result, index) => <Result key={index} {...result}/>)}
          </ul>
          : null
        }
      </Fragment>
    );
  }
}

export default connect(
  ({ results }) => ({ results }),
  ({ loadResults })
)(Results);