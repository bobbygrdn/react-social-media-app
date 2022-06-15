import React from 'react'

class PostItem extends React.Component{
    render() {
    
        const handleSetSinglePost = (e) => {
            this.props.setSinglePost(e)
        }

        return (
            <div className='postContainer'>
            <h1 className='userId'>User Id: {this.props.elem.userId}</h1>
            <h1 className='postItem' id={this.props.elem.id} onClick={handleSetSinglePost}>{this.props.elem.title}
            </h1>
            </div>
        )
    }
}

export default PostItem