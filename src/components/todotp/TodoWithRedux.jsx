import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "../../utils/todoSlice";

const TodoWithRedux = ()=>{
    const [newItemName, setNewItemName] = useState("");
      const [isEditing, setIsEditing] = useState(false);
      const [darkMode,setDarkMode] = useState(false)
    
      const todos = useSelector((state) => state.todos);
      console.log("todos", todos);
      
      const dispatch = useDispatch();
     const handleAddTodo = (e)=>{
      e.preventDefault()
        if(newItemName === "") return
        dispatch(addTodo(newItemName));
        setNewItemName("")
      }
      const toggleDarkMode = () => {
        setDarkMode(!darkMode);
      };
      const toggleComplete = (itemId) => {
        const newItems = todos.map((item) => {
          if (item.id === itemId) {
            const newItem = { ...item, completed: !item.completed };
            return newItem;
          }
          return item;
        });
        // setItems(newItems);
      };
    return (
      <div className="max-w-7xl relative mx-auto bg-[#282C34] w-full dark:bg-neutral-900 h-screen">
        <p className="text-center text-white my-4">Todo with redux</p>
        <div className="max-w-xl mx-auto  py-4">
          <form>
            <div className="flex">
              <input
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
                className="px-2 flex-auto border bottom-2 border-gray-400 rounded-l-md  py-1"
                type="text"
              />
              <button
                onClick={(e) => handleAddTodo(e)}
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
            {todos.map((item) => {
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
                        // onClick={() => onEditButton(item.id)}
                        className="bg-black px-3 py-1 text-white rounded-md"
                      >
                        edit
                      </button>
                      <button
                        onClick={() => dispatch(deleteTodo(item.id))}
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
    );
}
export default TodoWithRedux