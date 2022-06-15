import React from 'react'
import Loading from './components/loading'
import SinglePost from './components/singlePost'
import HomeButton from './components/homeButton'
import Posts from './components/posts'
import GordonMedia from './img/gordonMedia.png'
import Users from './components/users'
import UserProfile from './components/userProfile'
import UsersButton from './components/userButton'

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: null,
            singlePost: null,
            loading: true,
            loadingMessage: 'Data is currently being received from server. Please wait.',
            user: null,
            users: null,
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts/')
        .then(response => response.json())
        .then(data => this.setState({posts: data, loading: false}))
    }

    render() {

        const setUserId = (e) => {
            fetch(`https://jsonplaceholder.typicode.com/users/${e.target.id}`)
            .then(response => response.json())
            .then(data => this.setState({user: data}))
        }

        const click = () => {
            this.setState ({singlePost: null})
            this.setState ({user: null})
            this.setState ({users: null})
        }

        const setSinglePost = (e) => {
            fetch(`https://jsonplaceholder.typicode.com/posts/${e.target.id}`)
            .then(response => response.json())
            .then(data => this.setState({singlePost: data}))
        }

        const setUsers = () => {
            fetch('https://jsonplaceholder.typicode.com/users/')
            .then(response => response.json())
            .then(data => this.setState({users: data}))
        }

        if(this.state.loading === true) {
            return (
            <div className="loading">
                <Loading loadingMessage={this.state.loadingMessage} />
            </div>
            )
        }
        if(this.state.users !== null){
            return(
                <div>
                <div className='header'>
                    <h1 className="title">Gordon Media!</h1>
                    <img src={GordonMedia} alt="none" className='icon' />
                    </div>

                    <HomeButton click={click} />
                    <Users users={this.state.users}/>
                </div>
            )
        }else if(this.state.user !== null) {
            return (
                <div>
                <div className='header'>
                    <h1 className="title">Gordon Media!</h1>
                    <img src={GordonMedia} alt="none" className='icon' />
                    </div>

                    <HomeButton click={click} />
                    <UserProfile user={this.state.user}/>
                </div>
            )
        } else if(this.state.singlePost !== null) {
            return(
            <div>
                 <div className='header'>
                    <h1 className="title">Gordon Media!</h1>
                    <img src={GordonMedia} alt="none" className='icon' />
                </div>
                <HomeButton click={click} />
                <SinglePost singlePost={this.state.singlePost} setUserId={setUserId} />
            </div>
            )
        } else {
            return(
                <div>
                    <div className='header'>
                        <h1 className="title">Gordon Media!</h1>
                        <img src={GordonMedia} alt="none" className='icon' />
                    </div>
                    <UsersButton getUsers={setUsers} />
                    <Posts posts={this.state.posts} setSinglePost={setSinglePost} setUserId={setUserId} />
                </div>
            )
        }

    }
}

export default App;