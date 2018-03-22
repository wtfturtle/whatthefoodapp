import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './mylist.css';
import { loadList } from './actions';

class MyList extends Component {


  render() {

    const { id, listResults } = this.props;

    return (
      <div>
        {listResults ?
          <ul>
            {listResults.map(result => (
              <li key={result.key}><Link to={`/lists/${id}`}>{result.name}</Link></li>
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


