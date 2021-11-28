import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'


const App = () => {
  const [showAddTask, setShowAddTask] = useState
  (false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Susirinkimas',
        day: 'gruodžio 15, 12:00',
        reminder: true,
    },
    {
        id: 2,
        text: 'Kelionė',
        day: 'kovo 5, 08:00',
        reminder: true,
    },
    {
        id: 3,
        text: 'Gimtadienis',
        day: 'sausio 25, 19:00',
        reminder: false,
    }
])

const addTask =(task) => {
  const id = Math.floor(Math.random()
  * 1000) + 1
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
}

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => 
  task.id !== id))
}

const toggleReminder = (id) => {
setTasks(tasks.map((task) => task.id === id ? 
{ ...task, reminder: !task.reminder } : task
    )
   )
  }

  return (
    <div className='container'>
      <Header onAdd={() => setShowAddTask
      (!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask  onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete=
      {deleteTask} onToggle={toggleReminder} /> : 'Sąrašas tuščias'}
      <Footer />
    </div>
  )
}

// class App extends React.Component {
//   render() {
//     return <h1>hey</h1>
//   }
// }
export default App;
