import React, { Component } from 'react';
import { connect } from 'react-redux';
import './mylist.css';
import { loadList } from './actions';

class MyList extends Component {

  componentDidMount() {
    this.props.loadList();
  }

  render() {

    const { listResults } = this.props;

    return (
      <div>
        {listResults ?
          <ul>
            {listResults.map(result => (
              <li key={result.key}>{result.name}</li>
            ))}
          </ul>
          :
          <p>Empty List</p>
        }

        <h2>hi</h2>
      </div>
    );
  }
}

export default connect(
  state => ({ listResults: state.listLoad }),
  { loadList }
)(MyList);


