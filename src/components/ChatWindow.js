import React from 'react';
import io from 'socket.io-client';
import OnlineList from './OnlineList';
import ChatForm from './ChatForm';
import DisplayMessages from './DisplayMessages';
import axios from 'axios';

const SOCKET_URL = 'http://192.84.41.188:3000';
const socket = io(SOCKET_URL);

class ChatWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.location.state.user,
            selectedUser: null
        }
        console.log("Chat window constructor called");
    }

    componentDidMount() {
        socket.emit('username', this.state.user.username);
    }

    render() {
        return (
            <div className="container">
                <div className="chat-container">
                    <div className="display-messages"><DisplayMessages socket={socket}/></div>
                    <div className="chat-form"><ChatForm socket={socket}/></div>
                </div>
                <div className="online-list"><OnlineList socket={socket} /></div>
            </div>
        );
    }
}

export default ChatWindow;