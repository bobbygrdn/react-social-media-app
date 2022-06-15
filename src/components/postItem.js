import React from 'react'

class PostItem extends React.Component{
    render() {
    
        const handleSetSinglePost = (e) => {
            this.props.handleSetSinglePost(e)
        }

        return (
            <h1 className='postItem' id={this.props.elem.id} onClick={handleSetSinglePost}>{this.props.elem.title}
            </h1>
        )
    }
}

export default PostItem