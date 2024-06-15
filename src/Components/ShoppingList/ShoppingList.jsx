import React from 'react'
import './ShoppingList.css'
import { useReducer, useState } from 'react'
import { reducer, ACTIONS } from './Reducer'
import ProductInput from './ShoppingListComponents/ProductInput'
import ShoppingHeader from './ShoppingListComponents/ShoppingHeader'
import ViewNeed from './ShoppingListComponents/ViewNeed'
import ViewBought from './ShoppingListComponents/ViewBought'

const ShoppingList = () => {
    const [state, dispatch] = useReducer(reducer, [])
    const [newTodo, setNewTodo] = useState('')
    const [priority, setPriority] = useState('Low')
    const [doneTodos, setDoneTodos] = useState([])
    const [visibleTable, setVisibleTable] = useState(true)
    
    const handleAdd = (newTodo, priority) => {
  
      if(newTodo === ''){
        alert('Please enter a todo')
        return
      }
  
      if(state.find(todo => todo.name === newTodo))
      {
        alert('Todo already exists')
        return
      }
  
      dispatch({
        type: ACTIONS.ADD_TODO,
        payload: {newTodo, priority}
      })
      setNewTodo('')
      setPriority('Low')
    }
  
    const handleDelete = (id) => {
      dispatch({
        type: ACTIONS.DELETE_TODO,
        payload: {id}
      })
    }
  
    const handleUpdate = (id) => {
      const newTodo = prompt('Enter new todo')
  
      if(!newTodo){
        alert('Todo cannot be empty')
        return
      }
  
      if(state.find(todo => todo.name === newTodo)){
        alert('Todo already exists')
        return
      }
  
      dispatch({
        type: ACTIONS.UPDATE_TODO,
        payload: {id, newTodo}
      })
    }
  
    const handleDone = (id) => {
      const doneTodo = state.find(todo => todo.id === id)
      setDoneTodos([...doneTodos, doneTodo])
      dispatch({
        type: ACTIONS.DELETE_TODO,
        payload: {id}
      })
    }
  
    const handleDeleteDone = (id) => {
      setDoneTodos(doneTodos.filter(todo => todo.id !== id))
    }
  
    const showTodoTable = () => {
      setVisibleTable(true)
    }
  
    const showDoneTable = () => {
      setVisibleTable(false)
    }

  return (
    <div className='shopping-list'>
    
    <ProductInput newTodo={newTodo} setNewTodo={setNewTodo} priority={priority} setPriority={setPriority} handleAdd={handleAdd}/>

    <div className='table-container'>

      <ShoppingHeader showTodoTable={showTodoTable} showDoneTable={showDoneTable}/> 
      
      {visibleTable ?
        <ViewNeed todos={state} handleDelete={handleDelete} handleDone={handleDone} handleUpdate={handleUpdate}/>
      :
        <ViewBought doneTodos={doneTodos} handleDeleteDone={handleDeleteDone}/>
      }
    </div>
    </div>
  )
}

export default ShoppingList
