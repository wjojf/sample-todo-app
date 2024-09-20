import { useState, useEffect } from "react";
import { dummyTodos } from "../data/todo";
import { Todo, sortTodods, createTodo } from "../types/todo";

export default function useTodos() {
    
    const [todos, setTodos] = useState(() => {
        const savedTodos: Todo[] = JSON.parse(localStorage.getItem("todos") ?? "[]");
        return sortTodods(savedTodos.length ? savedTodos : dummyTodos);
    });

    useEffect(() => {localStorage.setItem("todos", JSON.stringify(todos))}, [todos]);

    function setTodoCompleted(id: number, completed: boolean) {
        
        setTodos((prevTodos) => {
        return sortTodods(prevTodos.map((todo) => {
            if (todo.id === id) {
            return {
                ...todo,
                completed: completed,
            };
            }
            return todo;
        }));
        });
    }

    function addNewTodo(title: string) {
        setTodos((prevTodos) => {
        return [
            createTodo(prevTodos.length + 1, title, false),
            ...prevTodos,
        ];
        });
    }

    function removeTodo(id: number) {
        setTodos((prevTodos) => {
        return prevTodos.filter((todo) => {
            return todo.id !== id;
        });
        });
    }

    return {
        todos,
        setTodoCompleted,
        addNewTodo,
        removeTodo,
    }
};