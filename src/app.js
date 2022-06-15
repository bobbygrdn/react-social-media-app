import React from 'react'
import Loading from './components/loading'
import SinglePost from './components/singlePost'
import Button from './components/button'
import Posts from './components/posts'

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: null,
            singlePost: null,
            loading: true,
            loadingMessage: 'Data is currently being received from server. Please wait.',
            User: null,
            Users: null,
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => this.setState({posts: data, loading: false}))
    }

    render() {

        const click = () => [
            this.setState ({singlePost: null})
        ]

        const setSinglePost = (e) => {
            fetch(`https://jsonplaceholder.typicode.com/posts/${e.target.id}`)
            .then(response => response.json())
            .then(data => this.setState({singlePost: data}))
        }

        if(this.state.loading === true) {
            <div className="loading">
                <Loading loadingMessage={this.state.loadingMessage} />
            </div>
        }

        return (
            this.state.singlePost ? 
            <div>
                <SinglePost singlePost={this.state.singlePost} />
                <Button click={click} />
            </div>
            :
            <div>
                <h1 className="title">Gordon Media!</h1>
                <Posts posts={this.state.posts} setSinglePost={setSinglePost} />
            </div>
        )
    }
}

export default App;