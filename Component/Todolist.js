import React, { useState } from 'react';
function Todolist() {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);
    const handleAddTask = () => {
        if (task !== "") {
            setTasks([...tasks, task]);
            setTask("");
        }
    };

        const removeTask = (indexToRemove) => {
        setTasks(prev => prev.filter((_, i) => i !== indexToRemove));
    };

    return (
        <div>
            <h1>To-do List</h1>

            <input 
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />

            <button onClick={handleAddTask}>Add Task</button>

            <ul>
                {tasks.map((t, index) => (
                    <li key={index}>{t}
                     <button onClick={() => removeTask(index)}>Xóa</button></li>
                ))}
            </ul>
            
        </div>
    );
}

export default Todolist;