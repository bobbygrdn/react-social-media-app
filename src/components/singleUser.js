import React from 'react'

class SingleUser extends React.Component {
    render() {
        return (
            <div>
                <h1 className='userId' id={this.props.elem.id}>User Id: {this.props.elem.id}</h1>
                <h1 className='post'>{this.props.elem.name}</h1>
            </div>
        )
    }
}

export default SingleUser