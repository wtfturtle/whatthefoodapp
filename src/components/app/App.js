import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './app.css';
import Loading from './errorloading/Loading';
import Header from './header/Header';
import Footer from './footer/Footer';
import Home from '../home/Home';
import Login from './login/Login';
import CreateLogin from './login/CreateLogin';
import { Signin, Signup } from './auth/LoginForm';
import Results from '../results/Results';

export default class App extends Component {

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
                {/* <Route path="/login" component={Login}/>
                <Route path="/signup" component={CreateLogin}/> */}
                <Route path="/auth/signin" component={Signin}/>
                <Route path="/auth/signup" component={Signup}/>
                <Route path="/resulttest" component={Results}/>
                {/* <Route path="/movies/:id" render={({ match }) => <MovieDetail imdbID={match.params.id}/>}/> */}
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