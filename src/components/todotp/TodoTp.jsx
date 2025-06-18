import React, { useState } from "react";
import TodoWithRedux from "./TodoWithRedux";

const TodoTp = () => {
  const [darkMode,setDarkMode] = useState(false)
  const [newItemName, setNewItemName] = useState("");
  const [items, setItems] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const toggleDarkMode = ()=>{
    setDarkMode(!darkMode)
  }
  console.log(newItemName);
  const handleSubmit = (event)=>{
    event.preventDefault()
    if(newItemName === "") return
    if(newItemName && isEditing){
      const newItems = items.map((item)=>{
        if(item.id === editId){
          return {...item,title:newItemName}
        }
        return item
      })
      setItems(newItems)
      setNewItemName("")
      setIsEditing(false)
    }else{
      addItem(newItemName)
    }
  }
  const addItem= (itemName)=>{
    const newItem = {
      id: new Date().getTime().toString(),
      title: itemName,
      completed: false,
    };
    setItems([...items,newItem])
    setNewItemName("")
  }
  console.log("itemsLISTS",items);
  const onEditButton = (itemId)=>{
    const specificItem = items.find((item)=> item.id === itemId)
    console.log("specificItem",specificItem);
    
    setIsEditing(true)
    setNewItemName(specificItem.title)
    setEditId(itemId);
  }
  const onDeleteButton = (itemId)=>{
    const newItems = items.filter((item)=> item.id !== itemId)
    setItems(newItems)
  }
  const toggleComplete = (itemId)=>{
    const newItems = items.map((item)=>{
      if(item.id === itemId){
        const newItem = {...item, completed: !item.completed}
        return newItem
      }
      return item
    })
    setItems(newItems)
  }
  return (
    <main className={`${darkMode && "dark"}`}>
      <div className="max-w-7xl relative mx-auto bg-white dark:bg-neutral-900 h-96">
        <div className="max-w-2xl mx-auto  py-4">
          <form onSubmit={handleSubmit}>
            <div className="flex">
              <input
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
                className="px-2 flex-auto border bottom-2 border-gray-400 rounded-l-md  py-1"
                type="text"
              />
              <button
                onClick={handleSubmit}
                className="bg-black dark:bg-white text-white dark:text-black rounded-r-md px-5 py-1"
              >
                {isEditing ? "edit" : "add"} item
              </button>
            </div>
          </form>
          <button
            onClick={toggleDarkMode}
            className="absolute bottom-40 right-36 bg-black dark:bg-white text-white dark:text-black rounded-md px-3 py-1"
          >
            {darkMode ? "light" : "dark"}
          </button>
          {/* items List */}
          <div>
            {items.map((item) => {
              return (
                <div
                  className="border border-gray-400 rounded-b-md"
                  key={item.id}
                >
                  <div className="flex justify-between p-1">
                    <input
                      type="checkbox"
                      checked={item.completed}
                      onClick={(e) => toggleComplete(item.id)}
                    />
                    <div className={`${item.completed && "line-through"}`}>
                      {item.title}
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onEditButton(item.id)}
                        className="bg-black px-3 py-1 text-white rounded-md"
                      >
                        edit
                      </button>
                      <button
                        onClick={() => onDeleteButton(item.id)}
                        className="bg-blue-900 px-3 py-1 text-white rounded-md"
                      >
                        delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <TodoWithRedux />
    </main>
  );
};

export default TodoTp;
