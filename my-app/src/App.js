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
      reminder: true,
    },
    {
      id: 2,
      text:'Én magyarorzagban vagyok',
      day:' feb 7 2023',
      reminder:false,
    },
    {
      id: 3,
      text:'Én magyarorzagban vagyok',
      day:' feb 7 2023',
      reminder:false,
    },
  ])
  // --------------Delete task
  const deleteTask = (id) =>{
    setTasks(tasks.filter((task)=>task.id !== id))      //filter filters the ID and removes it
  }
  //--------------Toggle reminder
  const toggleReminder= (id)=>{
    setTasks(tasks.map((task) => task.id=== id ?
    {
      ...task, reminder: !task.reminder
    }
    : task))
  }

  return (
    <div className="container">
      <Header />
      {
        tasks.length > 0 ? (
          <Tasks tasks={tasks} onDelete= {deleteTask} onToggle={toggleReminder}/>)  
        : 
          ('no tasks to show')
      }
    </div>
  );
}

// class App extends React.Component{             With classes
//   render(){
//     return <h1>Hello from class</h1>
//   }
// } 

export default App;
