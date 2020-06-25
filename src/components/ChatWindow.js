import React from 'react';
import io from 'socket.io-client';
import OnlineList from './OnlineList';
import ChatForm from './ChatForm';
import DisplayMessages from './DisplayMessages';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const SOCKET_URL = 'http://192.84.41.188:3000';
const socket = io(SOCKET_URL);

class ChatWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {username : "testing"},
            selectedUser: null,
        }
        console.log("Chat window constructor called");
    }

    componentDidMount() {
        axios.get('http://192.84.41.188:3000/user', {
            withCredentials: true
        }).then((response) => {
            let user = response.data.user;
            console.log(user);
            this.setState({
                user: user,
            }, () =>{
                console.log(this.state.user.username);
                socket.emit('username', this.state.user.username);
            });
        }).catch((err) => {
            this.setState({
                user: {username: ""}
            })
            alert(err.response.data);
        })
    }

    render() {
        return this.state.user.username ? (
            <div className="container">
                <div className="chat-container">
                    <div className="display-messages"><DisplayMessages socket={socket} /></div>
                    <div className="chat-form"><ChatForm socket={socket} /></div>
                </div>
                <div className="online-list"><OnlineList socket={socket} /></div>
            </div>
        ):(
            <Redirect to="/login"/>
        );
    }
}

export default ChatWindow;