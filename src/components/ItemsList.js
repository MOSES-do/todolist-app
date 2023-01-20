import LineItem from './LineItem'

const ItemsList = ({items, handleCheck, handleDelete}) => {
  return (
    <ul>
     {
        items.map(item => (
            <LineItem key={item.id} handleCheck={handleCheck} handleDelete={handleDelete} item={item} />
        ))
     }   
      </ul>
  )
}

export default ItemsList