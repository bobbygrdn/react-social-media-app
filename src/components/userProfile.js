import React from 'react'

class UserProfile extends React.Component {
    render() {
        return (
            <div className='profile'>
                <h1 className='profileInfo'>{this.props.user.name}</h1>
                <h2 className='profileInfo'>Username: {this.props.user.username}</h2>
                <h2 className='profileInfo'>Email: {this.props.user.email}</h2>
                <h2 className='profileInfo'>Address: </h2>
                <h3 className='profileInfo'>{this.props.user.address.street}</h3>
                <h3 className='profileInfo'>{this.props.user.address.suite}</h3>
                <h3 className='profileInfo'>{this.props.user.address.city}</h3>
                <h3 className='profileInfo'>{this.props.user.address.zipcode}</h3>
                <h2 className='profileInfo'>Phone Number: {this.props.user.phone}</h2>
                <h2 className='profileInfo'>Website: {this.props.user.website}</h2>
                <h1 className='profileInfo'>{this.props.user.company.name}</h1>
                <h2 className='profileInfo'> The leading {this.props.user.company.catchPhrase}</h2>
            </div>
        )
    }
}

export default UserProfile