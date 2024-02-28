import React from "react";
import { Provider } from "react-redux";
import store from "./Components/store";
import Addtask from "./Components/addTask";
import ListTask from './Components/listTask';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Provider store={store}>
        <Addtask />
        <ListTask />
    </Provider>
    </div>
  );
}

export default App;
