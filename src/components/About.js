import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";




class About extends React.Component {
    constructor (props) {
        super(props);

        // console.log("Parent Constructor")
    }

    componentDidMount() {
        // console.log('Parent component did mount')
    }


    render() {
        //  console.log("Parent Render")
        return (
            <div className="border border-red-300">
                <h1 className="font-bold text-lg">About</h1>
                <div>
                    LoggedIn User
                    <UserContext.Consumer>{({loggedInUser}) => (<h1>{loggedInUser}</h1>)}</UserContext.Consumer>
                </div>
                <h2 className="text-lg">I'm learning ReactJS from Namaste React</h2>    
                <UserClass name={"Nitin Kumar (class)"} location={"Bangalore"} />
            </div>
        )
    }
}


// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>I'm learning ReactJS from Namaste React</h2>
//             {/* <User name={"Nitin Kumar (function)"} /> */}

//             <UserClass name={"Nitin Kumar (class)"} location={"Bangalore"} />
//         </div>
//     )
// }

export default  About;