import React from 'react'
import ItemsList from './ItemsList';

const Content = ({items, handleCheck, handleDelete}) => {
  return (
    <div className="main">
        {items.length ?(
            <ItemsList items={items} handleCheck={handleCheck} handleDelete={handleDelete}/>
        ):(
            <p style={{marginTop:'2rem'}}>Your list is empty</p>
        )}
    </div>
  )
}

export default Content