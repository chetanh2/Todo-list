import React, { useEffect, useState } from 'react'
import Form from './Form';
import { ToastContainer, toast } from "react-toastify";
import Items from './Items';
import { nanoid } from 'nanoid';

  const setLocalStorage = (items) => {
    localStorage.setItem("Dmart Item list", JSON.stringify(items));
  };
  const defaultList = JSON.parse(localStorage.getItem('Dmart Item list') || '[]');
  console.log("defaultList",defaultList);
  
const TodoStrike = () => {
  const [items, setItems] = useState(defaultList);
  const [isEditing, setIsEditing] = useState(false);
  const [newItemName, setNewItemName] = useState("");
  const [editID, setEditID] = useState(null);

  const [loading,setLoading] = useState(false)
  const [error,setError] = useState("")

  const getTodoList = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=4"
      );
      if (!response.ok) {
        throw new Error('Failed to fetch todos');
      }
      const data = await response.json()
      setItems(data);
      setLocalStorage(data);
      setLoading(false)
    } catch (error) {
      setError("Something went wrong")
      setLoading(false)
    }
  }
  useEffect(()=>{
    const storedItems = defaultList
    if(storedItems.length > 0){
      setItems(storedItems)
    }else{
      getTodoList();
    }
  },[])
  
  if(loading){
    return <h1>Loading...</h1>
  }
  if(error){
    return <h1>{error}</h1>
  }

  const addItem = (itemName) => {
    const newItem = {
      title: itemName,
      completed: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('item added to the list');
  };
  const removeItem =(itemId)=>{
    const newItems = items.filter((item)=> item.id !== itemId)
    setItems(newItems)
    setLocalStorage(newItems);
    toast.success('item removed')
  }
  const toggleCompleted = (itemId) => {
    const newItems = items.map((item)=>{
      if(item.id === itemId){
        const newItem = {...item, completed: !item.completed}
        return newItem
      }
      return item
    })
    setItems(newItems)
  };
  const editItem = (itemId) => {
    const specificItem = items.find((item) => item.id === itemId);
    setIsEditing(true);
    setNewItemName(specificItem.title);
    setEditID(itemId);
    setLocalStorage(specificItem);
  };
  console.log("items>>>>>>>>>>", items);
  
  return (
    <div className="">
      <ToastContainer position="top-center" />
      <Form
        addItem={addItem}
        newItemName={newItemName}
        setNewItemName={setNewItemName}
        isEditing={isEditing}
        editID={editID}
        setItems={setItems}
        items={items}
        setIsEditing={setIsEditing}
        setLocalStorage={setLocalStorage}
      />
      <Items
        removeItem={removeItem}
        items={items}
        editItem={editItem}
        toggleCompleted={toggleCompleted}
      />
    </div>
  );
}

export default TodoStrike