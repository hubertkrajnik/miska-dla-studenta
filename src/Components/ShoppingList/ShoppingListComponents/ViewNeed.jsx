import React from 'react'
import 
{ 
  FaTrash,
  FaEdit,
  FaCheck 
} from 'react-icons/fa'

const ViewNeed = ({todos,handleDelete,handleDone, handleUpdate}) => {
  return (
    <div className='table-main-section-container'>
    <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Nazwa</th>
        <th>Priorytet</th>
        <th>Usuń</th>
        <th>Aktualizuj</th>
        <th>Odwiedziłem</th>
      </tr>
    </thead>
    <tbody>
      {todos && todos.map(todo => (
        <tr key={todo.id}>
          <td>{todo.id.slice(0,8)}</td>
          <td>{todo.name}</td>
          <td style={{ color: 
            todo.priority === 'High' ? 'red' : 
            todo.priority === 'Medium' ? 'orange' : 
            'black' }}>
            {todo.priority}
          </td>
          <td>
            <FaTrash className='delete-icon' onClick={() => handleDelete(todo.id)}/>
          </td>
          <td>
            <FaEdit className='update-icon' onClick={() => handleUpdate(todo.id)}/>
          </td>
          <td>
            <FaCheck className='done-icon' onClick={() => handleDone(todo.id)}/>
          </td>
        </tr>
      ))
      }
    </tbody>
  </table>
</div>
  )
}

export default ViewNeed
