import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.data + " class constructor");
    this.state = {
      userInfo: {
        name: "dummy",
        location: "default",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/swaroop1995");
    const users = await data.json();
    this.setState({
      userInfo: users,
    });
    console.log("users", users);
  }
  componentDidUpdate() {
    console.log("component did update");
  }
  componentWillUnmount() {
    console.log("component will unmount");
  }
  render() {
    // console.log(this.props.data + " class render");

    const { name, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>Name:{name}</h2>
        <h2>Last name:{this.props.data}</h2>
        <h2>Location:Hyderabad</h2>
        <h2>Email:swaroop040@gmail.com</h2>
      </div>
    );
  }
}

export default UserClass;
