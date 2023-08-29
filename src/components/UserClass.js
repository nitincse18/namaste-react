import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props)
        // Why do we write super
        this.state = {
            userInfo:  {
                name: 'Dummy',
                loacation: 'Default',
                login: '',
                avatar_url: ''
            }
        }
        console.log(this.props.name, "Child Constructor")
    }

    async componentDidMount() {
        const data = await fetch('https://api.github.com/users/editi-bft');
        const json = await  data.json();

        this.setState({
            userInfo: json
        })

        console.log(json)
    }

    componentDidUpdate() {
        console.log('Component Did Update')
    }

    componentWillUnmount() {
        console.log('Component Will Unmount')
    }


    render() {
        // const { name, location } = this.props;
        const {name, location, login, avatar_url} = this.state.userInfo;

        return( 
        <div className="user-card">

            <h2 className="text-xl text-teal-600">Name: {name}</h2>
            <h3 className="text-xl text-teal-600">Location: {location}</h3>
            <h4 className="text-xl text-teal-600">Contact: {login}</h4>
            <img src={avatar_url} style={{width:100}}></img>
        </div>
    )
    }
}

export default UserClass

/* 
    ----------- Mounting----------

    Constructor(dummy)
    Render (dummy)
        <HTML Dummy>
    Component Did Mount
        <API Call>
        <this.setState> ->State variable is updated

    ------- UPDATE

        render(API data)
        <HTML (new API data)
        componentDidUpdate

*/