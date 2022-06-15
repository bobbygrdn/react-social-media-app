import React from 'react'
import SingleUser from './singleUser'

class Users extends React.Component {
    render() {
        return(
            this.props.users.map((elem) => {
                return <SingleUser elem={elem} key={elem.id} />
            })
        )
    }
}

export default Users