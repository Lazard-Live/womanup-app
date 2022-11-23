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
    const addTask = (userInputTitle, userTitleText, userInputFile, userInputDate) => {
        if (userInputTitle && userTitleText) {
            const newItem = {
                id: Math.random().toString(36).substring(2, 9),
                title: userInputTitle,
                text: userTitleText,
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

    const [editedTask, setEditedTask] = useState(null);

    const startEditingTask = (id) => {
        setEditedTask(todos.find((todo) => todo.id === id));
    }

    const finishEditingTask = (id, userInputTitle, userTitleText, userInputFile, userInputDate) => {
        const foundTaskIndex = todos.findIndex((todo) => todo.id === id);
        const newTodos = [...todos];
        newTodos[foundTaskIndex] = {
            ...newTodos[foundTaskIndex],
            title: userInputTitle,
            text: userTitleText,
            file: userInputFile,
            date: userInputDate,
        };

        setTodos(newTodos);
        setEditedTask(null);
    }

    return (
        <div className="App">
            <header>
                {/*<h1> Дел в списке: {todos.length}</h1>*/}
                <ToDoForm addTask={addTask} editedTask={editedTask} onEditFinish={finishEditingTask} />
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
                        editTask={startEditingTask}
                    />
                )
            })
            }
        </div>
    );
}

export default App
