import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import ErrorScreen from '../pages/ErrorScreen';
import HomeScreen from '../pages/HomeScreen';
import LoginScreen from '../pages/LoginScreen';
import LoginScreen2 from '../pages/LoginScreen2';
const AppRoutes = () => {
    return (
    <Router>
       <Switch>
           <Route  exact path='/login' componente={LoginScreen2}/>
           <Route exact path='/' component={HomeScreen}/>
           <Route  component={ErrorScreen}/>
        </Switch>
    </Router>
    )
}
export default AppRoutes;
