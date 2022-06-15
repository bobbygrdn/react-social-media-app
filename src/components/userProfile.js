import React from 'react'

class UserProfile extends React.Component {
    render() {
        return (
            <div className='profile'>
                <h1>{this.props.user.name}</h1>
                <h2>Username: {this.props.user.username}</h2>
                <h2>Email: {this.props.user.email}</h2>
                <h2>Address: </h2>
                <h3>{this.props.user.address.street}</h3>
                <h3>{this.props.user.address.suite}</h3>
                <h3>{this.props.user.address.city}</h3>
                <h3>{this.props.user.address.zipcode}</h3>
                <h2>Phone Number: {this.props.user.phone}</h2>
                <h2>Website: {this.props.user.website}</h2>
                <h2>Company: </h2>
                <h3>{this.props.user.company.name}</h3>
                <h3>{this.props.user.company.catchPhrase}</h3>
            </div>
        )
    }
}

export default UserProfile