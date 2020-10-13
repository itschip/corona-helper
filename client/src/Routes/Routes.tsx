import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import { FeedContainer } from '../components/Feed/components/FeedContainer'
import { HeaderContainer } from '../components/Header/HeaderContainer'
import { HomeContainer } from '../components/Home/components/HomeContainer';

export const Routes = () => {
  return (
    <Router>
      <div>
        <HeaderContainer />
        <Switch>
            <Route path="/" exact component={HomeContainer} /> 
            <Route path="/feed" component={FeedContainer}/>
        </Switch>
      </div>
    </Router>
  )
}
