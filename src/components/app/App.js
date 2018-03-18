import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Loading from './errorloading/Loading';
import Header from './header/Header';
import Footer from './footer/Footer';
import Home from '../home/Home';
import Login from './login/Login';
import { Signin, Signup } from './auth/Login';


export default class App extends Component {

  render() {
    
    return (
      <div className="app">
        
        <Router>
          <div>
            <Header/>
            <main role="main" id="main">
              <Loading/>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/auth/signin" component={Signin}/>
                <Route path="/auth/signup" component={Signup}/>
                {/* <Route path="/movies/:id" render={({ match }) => <MovieDetail imdbID={match.params.id}/>}/> */}
                <Redirect to="/"/>
              </Switch>
            </main>
          </div>
        </Router>

        <Footer/>
      </div>
    );
  }
}