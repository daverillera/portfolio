import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Nav} from './components/Nav'
import { Home } from './pages/home';
import { About } from './pages/about';
import { Contact } from './pages/contact';
import { Resume } from './pages/resume';
import { Footer } from './components/Footer';

export const Routes = () => {
  return(
    <div>
      <Nav />
      <Switch>
         <Route exact path='/Home' component={Home} />
         <Route exact path='/'><Redirect to='/Home' /></Route>
         <Route exact path='/About' component={About} />
         <Route exact path='/Contact' component={Contact} />
         <Route exact path='/Resume' component={Resume} />
      </Switch>
      <Footer />
    </div>  
  );
};

