// import React from 'react'                    With classes
import {useState} from 'react'
import Header from "../src/components/Header";
import Tasks from '../src/components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const[showAddTask, setShowAddTask] = useState(false)
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
  //----------------Add task
  const addTask=(task)=>{
    const id= Math.floor(Math.random()*10000)+1
    const newTask={id, ...task}
    setTasks([...tasks, newTask])
  }

  // --------------Delete task
  const deleteTask = (id) =>{
    setTasks(tasks.filter((task)=>task.id !== id))      //filter filters the ID and removes it
  }
  //--------------Toggle reminder
  const toggleReminder= (id)=>{
    setTasks(tasks.map((task) => task.id=== id ?    //if the id is the same as one of the ids
    {
      ...task, reminder: !task.reminder       //toggle
    }
    : task))                                 //else, stay the same
  }

  return (                                            //&& is an easy way to ternary conditional (if && then)
    <div className="container">
      <Header onAdd={()=> setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}   
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
