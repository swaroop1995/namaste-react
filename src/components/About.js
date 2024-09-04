import UserContext from "../utils/UserContext";
import UserClass from "./UserClass";
import React, { useContext } from "react";
// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is Namaste React Web Series</h2>
//       <UserClass data={"attaluri"} />
//     </div>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("parent  constructor");
  }

  componentDidMount() {
    // console.log("parent component did mount");
  }
  render() {
    // console.log("parent render");

    return (
      <div>
        <UserContext.Consumer>
          {(value) => <h1>{value.loggedInUser}</h1>}
        </UserContext.Consumer>
        <h1>About</h1>
        <h2>This is Namaste React Web Series</h2>
        <UserClass data={"child1"} />
        {/* <UserClass data={"child2"} /> */}
      </div>
    );
  }
}

export default About;
