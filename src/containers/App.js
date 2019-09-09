import React, { Component } from 'react';
import './App.scss';
import Navbar from '../components/Navbar/Navbar';
import Travellers from '../components/Travellers/Travellers';
import Contacts from '../components/Contacts/Contacts';
import {
  Route,
  Switch
} from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <Navbar />
        </header>
        <main className="App-main">
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Travellers />}
            />
             <Route 
              path="/contacts" component={Contacts} />
          </Switch>
        </main>
        <footer >
          <nav className="App-footer navbar fixed-bottom">
            <div>
              <span style={{color:'yellow'}}>OlegGre4ka&copy; 2019. TravelApp</span>
            </div>
            <div style={{marginLeft:'15px',marginRight:'15px'}}>
              <a href="mailto:gre4kae@gmail.com" title="Email" target="_blank" rel="noopener noreferrer">
                <FaEnvelope style={{ color: 'yellow' , fontSize: '24px' }} /><span style={{ color: 'yellow' }}>gre4kae@gmail.com</span></a>
            </div>
            <div><a href="https://github.com/OlegGre4ka" title="Github" target="_blank" rel="noopener noreferrer">
              <FaGithub style={{  color: 'yellow' ,fontSize: '24px' }} /></a>
              <a href="https://www.linkedin.com/in/oleg-grechka-b14488172/" title="Linkedin" target="_blank" rel="noopener noreferrer">
                <FaLinkedin style={{  color: 'yellow' ,fontSize: '24px' }} /></a>
              <a href="skype:gre4kae?call" title="Skype" target="_blank" rel="noopener noreferrer">
                <FaSkype style={{  color: 'yellow' ,fontSize: '24px' }} /></a>
            </div>
          </nav>
        </footer>
      </div>
    );
  }
}


export default App;
