import React from 'react';
import Navbar from './templates/Navbar'
import Home from './templates/Home'
import {Route, Switch} from 'react-router-dom'
import About from './templates/About'
import Contact from './templates/Contact'
import Service from './templates/Services'

function App() {
  return (
    <>
    <Navbar />

      <div className="container">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/tips' component={About} />
          <Route exact path='/business' component={Service} />
        </Switch>
      </div>
    </>
  );
}

export default App;
