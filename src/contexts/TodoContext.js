import { createContext, useContext } from "react";


export const TodoContext = createContext({
    todos:[
        {
            id: 1,
            todo:"Todo Message",
            completed:false
        }
    ],
    addTodo: (todo) =>{},
    updateTodo: (id, todo) =>{},
    deleteTodo: (id) =>{},
    toggleComplete:(id) => {}
});

//create custome hooks for use the TodoContext
export const useTodo = () =>{
    return useContext(TodoContext);
}

//use this context for more files.
export const TodoProvider = TodoContext.Provider;