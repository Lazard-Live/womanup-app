import {useState} from "react";

import './App.scss';
import ToDo from "./components/ToDo.jsx";
import ToDoForm from "./components/ToDoForm.jsx";

function App() {

    const [todos, setTodos] = useState([]);

    const addTask = (userInputTitle, userTitleText, userInputFile) => {
        if (userInputTitle && userTitleText) {
            const newItem = {
                id: Math.random().toString(36).substr(2, 9),
                title: userInputTitle,
                text: userTitleText,
                file: userInputFile,
                complete: false
            }
            setTodos([...todos, newItem])
        }
    }

    const removeTask = (id) => {
        setTodos([...todos.filter((todo) => todo.id !== id)])
    }

    return (
        <div className="App">
            <header>
                <h1> Дел в списке: {todos.length}</h1>
            </header>
            <ToDoForm addTask={addTask}/>
            <div className="items-list">
                {todos.map((todo) => {
                    return (
                        <ToDo
                            todo={todo}
                            key={todo.id}
                            removeTask={removeTask}
                        />
                    )
                })
                }
            </div>
        </div>
    );
}

export default App
