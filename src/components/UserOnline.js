import React from 'react';

class UserOnline extends React.Component{

    render(){
        return(
            <li>{this.props.username}</li>
        );
    };

}

export default UserOnline;