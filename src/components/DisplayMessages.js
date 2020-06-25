import React from 'react';
import axios from 'axios';

class DisplayMessages extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            messages : []

        }
    }
    componentDidMount(){
        axios.get("http://192.84.41.188:3000/chat",{
            withCredentials: true
        })
        .then(res => {
            console.log(res.data);
            this.setState({
                messages : res.data
            })
        }).catch(err => console.log(err));
        const socket = this.props.socket;
        socket.on('chat-message', (content)=>{
            this.setState(prevState => ({
                messages : [...prevState.messages, content]
            }))
        })
    }

    render(){
        const messages = this.state.messages;
        const list = messages.map((element) =>
            <li>{element.content}</li>
        )
        return(
            <div>
                <ul>
                    {list}
                </ul>
            </div>
        )
    }
}

export default DisplayMessages;