import React, { Component } from 'react';
// import MyList from './MyList';
import { connect } from 'react-redux';
import { addList, loadList } from './actions';

class User extends Component {

  componentDidMount() {
    this.props.loadList();
  }

  state = {
    list: ''
  };

  handleSubmit = event => {
    event.preventDefault();
    const { list } = this.state;
    this.props.addList(list);
    this.setState({
      list: ''
    });
    console.log(list);
  };

  handleChange = ({ target }) => {
    this.setState({ list: target.value });
  };

  render() {
    const { list } = this.state;
    const { user, listResults } = this.props;
    if(!listResults) return null;

    return (
      <section className="main-container maxwidth-wrap">

        {user && <h4>Hello, {user.name}</h4>}

        <form onSubmit={this.handleSubmit}>
          <legend>Create List</legend>
          <label htmlFor="listTitle">
            <input id="listTitle" value={list} onChange={this.handleChange}/>
          </label>
          <button>Create List</button>
        </form>

        {listResults.length ?
          <ul>
            {listResults.map(result => (
              <li key={result.key}>{result.list}</li>
            ))}
          </ul>
          :
          <p>Empty List</p>
        }
        {/* <MyList/> */}
      </section>
    );
  }
}

export default connect(
  state => ({ 
    user: state.user,
    listResults: state.listLoad.payload }),
  { addList, loadList }
)(User);