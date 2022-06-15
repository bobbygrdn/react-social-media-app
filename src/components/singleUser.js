import React from 'react'

class SingleUser extends React.Component {
    render() {

        const handleSetUserId = (e) => {
            this.props.setUserId(e)
        }

        return (
            <div>
                <h1 className='userIds'>User Id: {this.props.elem.id}</h1>
                <h1 className='userNames'  id={this.props.elem.id} onClick={handleSetUserId}>{this.props.elem.name}</h1>
            </div>
        )
    }
}

export default SingleUser