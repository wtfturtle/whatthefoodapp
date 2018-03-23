import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './mylist.css';
import { loadList } from './actions';
import './user.css';

class MyList extends Component {


  render() {

    const { listResults } = this.props;

    return (
      <div>
        {listResults ?
          <ul className="mylist-ul">
            {listResults.map(result => (
              <li className="mylist-li" key={result.key}>
                <h4><Link to={`/user/lists/${result.key}`}>{result.name}</Link></h4>
                <time>Added on: {new Date().toLocaleDateString()}</time>
              </li>
            ))}
          </ul>
          :
          <p>Empty List</p>
        }
      </div>
    );
  }
}

export default connect(
  state => ({ 
    listResults: state.listLoad
  }),
  { loadList }
)(MyList);


