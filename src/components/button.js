import React from 'react'

class Button extends React.Component {

    render() {
        return(
            <button className='button' onClick={this.props.click}>Home</button>
        )
    }

}

export default Button