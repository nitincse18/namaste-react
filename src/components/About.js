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
            <div>
                <h1>About</h1>
                <h2>I'm learning ReactJS from Namaste React</h2>    
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