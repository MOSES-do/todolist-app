import {useRef} from 'react'
import { FaPlus } from 'react-icons/fa';


const AddItem = ({handleSubmit, newItem, setNewItem}) => {
    const inputRef = useRef();
  return (
    <form className="addForm" onClick={handleSubmit}>
        <label htmlFor="addItem">Add Item</label>
        <input type="text" placeholder="Enter Your Todo" autoFocus ref={inputRef} value={newItem} onChange={(e)=> setNewItem(e.target.value) } required/>
        <button type="submit" onClick={()=> inputRef.current.focus()}><FaPlus /></button>
      </form>
  )
}

export default AddItem