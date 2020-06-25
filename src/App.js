import React from 'react';
import './App.css';
import ChatWindow from './components/ChatWindow';
import Login from './components/Login';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     user : {},
  //     isLoggedIn : false
  //   }
  // }

  // onSubmit(user, check){
  //   this.setState({
  //     user : user,
  //     isLoggedIn : check
  //   })
  // }

  render() {
    return (
      <div>
        <Switch>
          <Route path="/login" >
            <Login />
          </Route>
          <Route exact path="/" render={(props) => <ChatWindow {...props}/>}/>
        </Switch>
      </div>
    );
  }
}

export default App;

