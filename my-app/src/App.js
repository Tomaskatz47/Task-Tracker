// import React from 'react'                    With classes
import {useState} from 'react'
import Header from "../src/components/Header";
import Tasks from '../src/components/Tasks'
function App() {
  const[tasks, setTasks]= useState([
    {
      id: 1,
      text:'Én magyarorzagban vagyok',
      day:' feb 7 2023',
      remineder:false,
    },
    {
      id: 2,
      text:'Én magyarorzagban vagyok',
      day:' feb 7 2023',
      remineder:false,
    },
    {
      id: 3,
      text:'Én magyarorzagban vagyok',
      day:' feb 7 2023',
      remineder:false,
    },
  ])
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

// class App extends React.Component{             With classes
//   render(){
//     return <h1>Hello from class</h1>
//   }
// } 

export default App;
