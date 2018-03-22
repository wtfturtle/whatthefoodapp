import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './app.css';
import Loading from './errorloading/Loading';
import Header from './header/Header';
import Footer from './footer/Footer';
import Home from '../home/Home';
import Signup from './auth/Signup';
import Signin from './auth/Signin';
import User from '../user/User';
import ResultDetail from '../results/ResultDetail';
import MyResults from '../user/MyResults';
import { listenForUser } from './auth/actions';

class App extends Component {

  componentDidMount() {
    this.props.listenForUser();
  }

  render() {
    
    return (
      <div className="app">
        
        <Router>
          <Fragment>
            <Header/>
            <main role="main" id="main">
              <Loading/>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/auth/signin" component={Signin}/>
                <Route path="/auth/signup" component={Signup}/>
                <Route path="/user/lists/:id" component={MyResults}/>
                <Route path="/user" component={User}/>
                <Route path="/results/:id" component={ResultDetail}/>
                <Redirect to="/"/>
              </Switch>
            </main>
          </Fragment>
        </Router>

        <Footer/>
      </div>
    );
  }
}

export default connect(
  state => ({ 
    user: state.user,
  }),
  { listenForUser }
)(App);