import React, { Component } from 'react';
import { connect } from 'react-redux';
import './mylist.css';
import { loadList } from './actions';

class MyList extends Component {

  componentDidMount() {

    // if(this.props.user !== this.props.user.uid)
    // if(nextProps.user.uid !== this.props.user.uid)
    this.props.loadList();
      // console.log(nextProps.user.uid);

  }
  // componentWillReceiveProps(nextProps) {

  //   // if(this.props.user !== this.props.user.uid)
  //   if(nextProps.user.uid !== this.props.user.uid)
  //     this.props.loadList();
  //     // console.log(nextProps.user.uid);

  // }

  render() {
    // const { user } = this.props;
    const { user, listResults } = this.props;
    // if(!listResults || !user) return null;
    console.log(listResults);

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


