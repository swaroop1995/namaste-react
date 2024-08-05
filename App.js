import React from "react";
import ReactDOM from "react-dom/client";
// JSX=>React.createElement()=>ReactElement-JS Object=>HTMLRender(render)
// React element

// React functional component
// Component composition

/*Planning food app
header 
 -logo
 -nav items
Body  
 -search bar
 -restaurant container
 -restaurant card
Footer
 -copyright
 -Links
 -address
 -contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
