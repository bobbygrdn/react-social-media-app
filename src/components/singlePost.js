import React from 'react'

class SinglePost extends React.Component {
    render() {
        return (
            <div>
                <h1 className="title">{this.props.singlePost.title}</h1>
                <p className='singlePost' id='{this.props.singlePost.id'>{this.props.singlePost.body}</p>
            </div>
        )
    }
}

export default SinglePost