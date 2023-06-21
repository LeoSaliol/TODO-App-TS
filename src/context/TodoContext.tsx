import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Task } from '../interface/TasksInterface';
import { getItem, setItem } from '../utils/localstorage';

type ContextProps = {
    task: string;
    setTask: React.Dispatch<React.SetStateAction<string>>;
    setTasksList: React.Dispatch<React.SetStateAction<Task[]>>;
    taskFilter: Task[];
    setTaskFilter: React.Dispatch<React.SetStateAction<Task[]>>;
    activeFilter: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    completedTask: (task: Task) => void;
    deleteTask: (task: Task) => void;
    deleteAllTask: () => void;
    getTaks: () => void;
    getActive: () => void;
    getCompleted: () => void;
};

interface Props {
    children: React.ReactNode;
}
const TodoContext = React.createContext<ContextProps | undefined>(undefined);

export function TodoContextPovider({ children }: Props) {
    const [task, setTask] = useState('');

    const [tasksList, setTasksList] = useState<Task[]>(getItem('tasks'));
    const [taskFilter, setTaskFilter] = useState(tasksList);
    const [activeFilter, setActiveFilter] = useState('all');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!task.trim()) {
            alert('Vacio');
            return;
        }
        const newTask = {
            id: uuidv4(),
            task: task,
            completed: false,
        };
        const temp = [newTask, ...tasksList];

        setTasksList(temp);
        setItem('tasks', temp);

        setTask('');
    };

    const completedTask = (task: Task) => {
        const index = tasksList.indexOf(task);
        const temp = [...tasksList];
        temp[index].completed = !temp[index].completed;
        setTasksList(temp);
    };

    const deleteTask = (task: Task) => {
        const index = tasksList.indexOf(task);
        const temp = [...tasksList];
        temp.splice(index, 1);
        setTasksList(temp);
        setItem('tasks', temp);
    };

    const deleteAllTask = () => {
        const temp = tasksList.filter((t) => !t.completed);
        setTasksList(temp);
    };

    const getTaks = () => {
        setActiveFilter('all');
    };

    const getActive = () => {
        setActiveFilter('active');
    };

    const getCompleted = () => {
        setActiveFilter('completed');
    };

    useEffect(() => {
        if (activeFilter === 'all') {
            setTaskFilter(tasksList);
        } else if (activeFilter === 'active') {
            const active = tasksList.filter((t) => t.completed === false);
            setTaskFilter(active);
        } else if (activeFilter === 'completed') {
            const completed = tasksList.filter((t) => t.completed === true);
            setTaskFilter(completed);
        }
    }, [activeFilter, tasksList]);
    const value = {
        task,
        setTask,
        setTasksList,
        taskFilter,
        setTaskFilter,
        activeFilter,
        handleChange,
        handleSubmit,
        completedTask,
        deleteTask,
        deleteAllTask,
        getTaks,
        getActive,
        getCompleted,
    };
    return (
        <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
    );
}

export const useTask = () => {
    const context = React.useContext(TodoContext);
    if (!context) {
        throw new Error('useTask debe estar dentro del proveedor TaskContext');
    }
    return context;
};
