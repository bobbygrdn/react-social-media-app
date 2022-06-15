import React from 'react'

class UsersButton extends React.Component {
    render() {
        return(
            <button className='button' onClick={this.props.getUsers}>Users</button>
        )
    }
   
}

export default UsersButton