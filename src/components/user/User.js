import React, { Component } from 'react';
import MyList from './MyList';
import { connect } from 'react-redux';
import { addList, loadList } from './actions';
import './user.css';

class User extends Component {

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
    this.props.loadList();
  };

  handleChange = ({ target }) => {
    this.setState({ list: target.value });
  };

  render() {
    const { list } = this.state;
    const { user } = this.props;


    return (
      <section className="main-container maxwidth-wrap">
        <div className="body-padding">

          {user && <h4>Hello, {user.name}</h4>}

          <div className="user-flex">
            <div className="createform">
              <form onSubmit={this.handleSubmit}>
                
                <label htmlFor="listTitle"> Create List</label>
                <input id="listTitle" value={list} onChange={this.handleChange}/>
                
                <button>Create List</button>
              </form>
            </div>
            <div className="mylist-area">
              <h5>My List</h5>
              { user && <MyList user={user}/>}
            </div>
          </div>

        </div>
      </section>
    );
  }
}

export default connect(
  state => ({ user: state.user }),
  { addList, loadList }
)(User);