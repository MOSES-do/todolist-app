import {useState, useEffect} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import AddItem from './components/AddItem';
import SearchItem from './components/SearchItem';
import './App.css';

function App() {

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')) || []);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');

  useEffect(()=>{
    localStorage.setItem('shoppinglist', JSON.stringify(items));
  }, [items])


  const addNewItem = (item)=>{
    const id = items.length ? items[items.length - 1 ].id + 1 : 1;
    const newItem = {id, checked:false,  item};
    setItems([...items, newItem]);
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!newItem) return;
    addNewItem(newItem);
    setNewItem('');
  }

  const handleCheck =(id)=>{
      // console.log(id);
      setItems(items.map(item=>{
     return item.id === id ? {...item, checked: !item.checked} : item;
      }))
  }

  const handleDelete =(id)=>{
    // console.log(id);
    setItems(items.filter(item=>{
      return item.id!== id;
    }))
  }


  return (
    <div className="App">
        <Header title="Todo List" />
        <SearchItem search={search} setSearch={setSearch} />
        <AddItem handleSubmit={handleSubmit} newItem={newItem} setNewItem={setNewItem} />
        <Content items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))} handleCheck={handleCheck} handleDelete={handleDelete}  />
        <Footer length={items.length} />
    </div>
  );
}

export default App;
