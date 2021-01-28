import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase';
import data from '../data.json';
import Grid from './Grid';
import Form from './Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data };
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAUHXRGhEq3uuisZ8XGaqqtprGB-ZPvaWQ",
      authDomain: "crm-react-cb47d.firebaseapp.com",
      projectId: "crm-react-cb47d",
      storageBucket: "crm-react-cb47d.appspot.com",
      messagingSenderId: "228934931151",
      appId: "1:228934931151:web:bcf5518b9cd22431d99dba",
      measurementId: "G-3GSQ6391QV"
    })
  }

  render() {
    return (
      <div>
        <div className="navbar-fixed">
          <nav className="blue lighten-2">
            <div className="nav-wrapper">
              <a href="/" className="brand-logo center">Contacts</a>
            </div>
          </nav>
        </div>
        <div>
          <Form />
          <Grid items={this.state.data}/>
        </div>
      </div>
    );
  }
}

export default App;
