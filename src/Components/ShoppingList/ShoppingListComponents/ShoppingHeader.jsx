import React from 'react'

const ShoppingHeader = ({showTodoTable, showDoneTable}) => {
  return (
    <div className='table-header-container'>
    <div>
      <h3>Lista miejsc</h3>
    </div>

  <div className='table-header-buttons-container'>
      <button className='table-header-button' onClick={showTodoTable}>Do odwiedzenia</button>
      <button className='table-header-button' onClick={showDoneTable}>Już odwiedziłeś</button>
    </div>
  </div>
  )
}

export default ShoppingHeader
