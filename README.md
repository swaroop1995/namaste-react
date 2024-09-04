#Namaste React

#Parcel
-Dev Build
-Local Server
-HMR=Hot Module Replacement
-File watching algorithm
-caching-Faster builds(parcel cache)
-Image optimization
-Minification(production build)
-Bundling
-Compress
-Consistent Hashing
-Error handling

#namaste Food

/_Planning food app
header
-logo
-nav items
Body  
 -search bar
-restaurant container
-restaurant card
-Img
-Name of the restaurant, rating, cuisine, delivery time
Footer
-copyright
-Links
-address
-contact
_/

/===============================
// JSX=>React.createElement()=>ReactElement-JS Object=>HTMLRender(render)
// React element

// React functional component
// Component composition

// Header layout

// Restaurant layout

// Body layout

-----Redux store----
slice-The data in the store is stored as slices
dispatch-It is used to dspatch an action event to upate the data
reducer-It is responsible for getting the data dispatched action and update the data
selector-It is used to read the data
subscribing_it is used subscribe the data from the selector

----TO add the data------
clicking on Add button-->will dispatch a action ---> will be used by reducer function to update the data

---To get the data-------
data will be fetched using selector---->it is obtained by subscribing to it

---Redux toolkit-------
Install @reduxjs/toolkit and react-redux
Build our store
Connect our store to the app
we will create a cart slice (Slice(cartSlice))
Dispatch an action
Read the data using selector

------Types of testing------
-Unit testing-Testing the react component in isolation(testing a single component)
-Integration testing-Testing multiple components when there are communicating with each other
-end to end testing(e2e)-Testing the application from end to end

----Setting up Testing in our app-----
-Install react testing library
-Installed Jest
-Installed Babel dependencies
-COnfigure Babel
-Configure Parcel config file to disable default babel transpilation
-jest configuration
-Install @babel/preset-react(to make jsx work in test cases)
-Add @babel/preset-react in babe configuration
-Install @testing-library/jest-dom
