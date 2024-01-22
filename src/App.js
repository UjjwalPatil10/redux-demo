import React, { Component } from "react";
import ProductTask from "./components/Amazon redux task/ProductTask";
import BoxImageMove from "./components/Box image move task/BoxImageMove";
import WithRedux from "./components/with-redux/WithRedux";
import WithoutRedux from "./components/without-redux/WithoutRedux";
import 
class App extends Component {
  //here we direct use component not React.Component so in named import write import{ Component } like this
  render() {
    //JSX
    return (
      <div className="app">
        {/* <ProductTask /> */}
        {/* <WithoutRedux /> */}
        {/* <WithRedux /> */}
        <UserApp />
        {/* <BoxImageMove /> */}
      </div>
    );
  }
}
export default App;
