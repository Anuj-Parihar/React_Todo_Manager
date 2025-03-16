// import React, { useState } from 'react'
// import { useTodo } from '../contexts/TodoContext';

// function TodoItem({todo}) {
//     const [isTodoEditable,setIsTodoEditable] = useState(false);
//     const [todoMsg, setTodoMsg] = useState(todo.todo)
//     const {updateTodo, deleteTodo, toggleComplete} = useTodo()

//     const editTodo = () =>{
//         updateTodo(todo.id, {...todo, todo:todoMsg})
//         setIsTodoEditable(false);
//     } 
//     const toggleCompleted =() =>{
//         toggleComplete(todo.id);
//     }

//     return (
//     <div 
//     className={`fle border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-whitw/50 duration-300 text-black ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}`}>

//         <input type="checkbox"
//             className='cursor-pointer'
//             checked={todo.completed}
//             onChange={toggleCompleted}
//         />
//         <input type="text" 
//         className={`border outline-none w-full bg-transparent rounded-lg ${isTodoEditable ?"border=black/10 px-2":" border-transparent"}`}
//         value={todoMsg}
//         onChange={(e) => setTodoMsg(e.target.value)}
//         readOnly={!isTodoEditable}
//         />
//         <button
//             className='inline-flex w-8 h-8 rounded-lg text-sm border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50'
//             onClick={()=>{
//                 if(todo.completed) return;
//                 if(isTodoEditable){
//                     editTodo();
//                 }else{
//                     setIsTodoEditable((prev)  => !prev)
//                 }
//             }}
//             disabled={todo.completed}
//         >{isTodoEditable ? "📂" : "📝"}</button>
//         <button className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shirnk-0'
//         onClick={()=>deleteTodo(todo.id)}
//         >❌</button>
//     </div>
//   )
// }

// export default TodoItem



import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <div
      className={`flex items-center border border-gray-300 rounded-lg px-4 py-2 gap-3 shadow-md transition-all duration-300 
        ${
          todo.completed
            ? "bg-green-200 line-through text-gray-600"
            : "bg-purple-200 text-black"
        }`}
    >
      {/* Checkbox */}
      <input
        type="checkbox"
        className="cursor-pointer w-5 h-5 accent-green-600"
        checked={todo.completed}
        onChange={toggleCompleted}
      />

      {/* Editable Input Field */}
      <input
        type="text"
        className={`border outline-none flex-1 bg-transparent rounded-md transition-all duration-200 px-2 ${
          isTodoEditable ? "border-gray-400" : "border-transparent"
        }`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />

      {/* Edit Button */}
      <button
        className="flex justify-center items-center w-9 h-9 rounded-md text-sm border border-gray-300 bg-gray-50 hover:bg-gray-100 transition-all duration-200 disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return;
          if (isTodoEditable) {
            editTodo();
          } else {
            setIsTodoEditable((prev) => !prev);
          }
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "📂" : "📝"}
      </button>

      {/* Delete Button */}
      <button
        className="flex justify-center items-center w-9 h-9 rounded-md text-sm border border-gray-300 bg-gray-50 hover:bg-red-200 transition-all duration-200"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
