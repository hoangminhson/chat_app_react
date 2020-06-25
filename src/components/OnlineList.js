import React from 'react';
import UserOnline from './UserOnline';

class OnlineList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userOnlineList: []
        }
    }

    componentDidMount() {
        const socket = this.props.socket;
        socket.on('online-list', (onlineList) => {
            this.setState({
                userOnlineList: onlineList
            })
        })
    }

    render() {
        const list = this.state.userOnlineList.map((username) =>
            <UserOnline username={username} />
        )
        return (
            <div>
                <h3>Online List</h3>
                <ul>
                    {list}
                </ul>
            </div>
        )
    }
}

export default OnlineList;