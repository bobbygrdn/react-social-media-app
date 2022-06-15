import React from 'react'
import PostItem from './postItem'

class Posts extends React.Component {
    render() {
        
        return(
            this.props.posts.map((elem) => {
                return <PostItem elem={elem} key={elem.id} setSinglePost={this.props.setSinglePost} setUserId={this.props.setUserId} />
            })
        )
    }
}

export default Posts