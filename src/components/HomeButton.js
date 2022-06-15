import React from 'react'

class HomeButton extends React.Component {

    render() {
        return(
            <button className='button' onClick={this.props.click}>Home</button>
        )
    }

}

export default HomeButton