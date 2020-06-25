import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            // user : {},
            isLoggedIn : false
        }
        console.log("Login constructor called");
    }

    handleOnInputChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    }

    handleOnSubmit = e => {
        axios.post("http://192.84.41.188:3000/user/login",{
            username : this.state.username,
            password : this.state.password
        },{
            withCredentials: true
        }).then((response) => {
            this.setState({
                // user : response.data.user,
                isLoggedIn : true
            })
            // var token = response.data.token;
            // localStorage.setItem('token', token);
        }).catch((err) => {
            alert(err.response.data);
        })
        e.preventDefault();
    }

    render() {
        return this.state.isLoggedIn ? (
            <Redirect to="/"/>
        ) : (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <label>
                        Username:
                        <input name="username" type="text" value={this.state.username}
                            onChange={this.handleOnInputChange} />
                    </label>
                    <br/>
                    <label>
                        Password:
                        <input name="password" type="text" value={this.state.password}
                            onChange={this.handleOnInputChange} />
                    </label>
                    <br/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Login;