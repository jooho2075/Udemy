import List from '@mui/material/List';
import { useState } from 'react';
import TodoItem from './TodoItem';

const initialTodos = [
    {id: 1, text: "walk the dog", completed: false},
    {id: 2, text: "walk the cat", completed: false},
    {id: 3, text: "walk the fish", completed: true},
    {id: 4, text: "walk the chicken", completed: false},
]

function TodoList() {
    const [todos, setTodos] = useState(initialTodos);

    const removeTodo = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(t => t.id !== id);
        })
    };

    const toggleTodo = (id) => {
        setTodos(prevTodos => {
            return prevTodos.map(todo => {
                if(todo.id === id) {
                    return {...todo, completed: !todo.completed}
                } else {
                    return todo;
                }
            })
        })
    };

    return(
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map((todo) => (
                <TodoItem 
                    todo={todo} 
                    key={todo.id} 
                    remove={removeTodo} 
                    toggle={() => toggleTodo(todo.id)}
                />
            ))}
        </List>
    );
}

export default TodoList;

// import * as React from 'react';

// export default function CheckboxList() {
//   const [checked, setChecked] = React.useState([0]);

//   const handleToggle = (value: number) => () => {
//     const currentIndex = checked.indexOf(value);
//     const newChecked = [...checked];

//     if (currentIndex === -1) {
//       newChecked.push(value);
//     } else {
//       newChecked.splice(currentIndex, 1);
//     }

//     setChecked(newChecked);
//   };

//   return (
    
//       {[0, 1, 2, 3].map((value) => {
        
//       })}
//     </List>
//   );
// }