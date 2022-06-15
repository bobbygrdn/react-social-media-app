import React from 'react'

class SinglePost extends React.Component {
    render() {

        const handleSetUserId = (e) => {
            this.props.setUserId(e)
        }

        return (
            <div>
                <h1 className='userId' id={this.props.singlePost.userId} onClick={handleSetUserId}>User Id: {this.props.singlePost.userId}</h1>
                <h1 className="postTitle">{this.props.singlePost.title}</h1>
                <p className='singlePost' id={this.props.singlePost.id}>{this.props.singlePost.body}</p>
            </div>
        )
    }
}

export default SinglePost