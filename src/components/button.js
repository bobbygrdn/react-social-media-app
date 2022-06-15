import React from 'react'

class Button extends React.Component {

    render() {
        return(
            <button className='button' onClick={this.props.singlePostClick}>Home</button>
        )
    }

}

export default Button