import React from 'react';

class ChatForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            message : "",
        }
    }

    handleOnChange = (e) => {
        this.setState({
            message : e.target.value
        })
    }

    handleOnSubmit = (e) =>{
        const socket = this.props.socket;
        socket.emit('chat-message', this.state.message);
        e.preventDefault();
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <input type="text" className="input-message" value={this.state.message} onChange={this.handleOnChange}/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default ChatForm;