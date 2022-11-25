import { useState, useEffect } from 'react';
import dayjs from 'dayjs';

function ToDo({ todo, removeTask, editTask }) {
    const oneEffect = () => {
        const dateToday = dayjs().format('YYYY-MM-DD'),
            dateTodo = todo.date;
        if (itemClassName === 'item') {
            if (dateToday > dateTodo) {
                setItemClassName('item item_bad');
            }
            if (dateToday === dateTodo) {
                setItemClassName('item item_warning');
            }
        }
    };

    const [itemClassName, setItemClassName] = useState('item');

    useEffect(() => {
        oneEffect();
    });

    const toggleClass = () => {
        if (itemClassName === 'item') {
            setItemClassName('item item_complete');
        }

        if (itemClassName !== 'item') {
            setItemClassName('item item_complete');
        }

        if (itemClassName === 'item item_complete') {
            setItemClassName('item');
        }
    };

    return (
        <div key={todo.id} className={itemClassName}>
            <div className="item__title">{todo.title}</div>
            <div className="item__text">{todo.text}</div>
            <i className="item__file">{todo.file}</i>
            <div className="item__date"> {todo.date} </div>

            <button
                onClick={() => {
                    toggleClass();
                }}
            >
                {' '}
                Complete
            </button>

            <button
                onClick={() => {
                    editTask(todo.id);
                }}
            >
                {' '}
                Edit
            </button>

            <button
                onClick={() => {
                    removeTask(todo.id);
                }}
            >
                {' '}
                Del
            </button>
        </div>
    );
}

export default ToDo;
