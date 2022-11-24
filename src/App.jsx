import {useState, useEffect} from "react";

import './App.scss';
import ToDo from "./components/ToDo.jsx";
import ToDoForm from "./components/ToDoForm.jsx";

function App() {

    // список элементов с сохранением добавленных задач в локальном хранилище
    const [todos, setTodos] = useState(() => {

        const savedTodos = localStorage.getItem("todos");
        if (savedTodos) {
            return JSON.parse(savedTodos);
        } else {
            return []
        }
    });

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    // Добавление элемента на страницу
    const addTask = (userInputTitle, userInputText, userInputFile, userInputDate) => {
        if (userInputTitle && userInputText) {
            const newItem = {
                id: Math.random().toString(36).substring(2, 9),
                title: userInputTitle,
                text: userInputText,
                file: userInputFile,
                date: userInputDate,
                edit: true
            }
            setTodos([...todos, newItem])
        }
    }

    const removeTask = (id) => {
        setTodos([...todos.filter((todo) => todo.id !== id)])
    }

    const [editedTask, setEditedTask] = useState(null)

    const startEditedTask = (id) => {
        setEditedTask(todos.find((todo) => todo.id === id))
    }

    const endEditTask = (id, userInputTitle, userInputText, userInputFile, userInputDate) => {
        const findTaskIndex = todos.findIndex((todo) => todo.id === id);
        const newTodos = [...todos];

        newTodos[findTaskIndex] = {
            ...newTodos[findTaskIndex],
            title: userInputTitle,
            text: userInputText,
            file: userInputFile,
            date: userInputDate,
            complete: false
        };

        setTodos(newTodos);
        setEditedTask(null)
    }

    return (
        <div className="App">
            <header>
                <h1> Дел в списке: {todos.length}</h1>
                <ToDoForm addTask={addTask}
                          editedTask={editedTask}
                          endEditTask={endEditTask}/>
            </header>

            <div className="items-list">
                <h3>Список дел:</h3>
            </div>
            {todos.map((todo) => {
                return (
                    <ToDo
                        todo={todo}
                        key={todo.id}
                        removeTask={removeTask}
                        editTask={startEditedTask}
                    />
                )
            })
            }
        </div>
    );
}

export default App
