import { Todo } from "../types/todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
    todos: Todo[];
    onCompletedChange: (id: number, completed: boolean) => void;
    onRemove: (id: number) => void;
}


export default function TodoList({todos, onCompletedChange, onRemove}: TodoListProps) {
    return (
        <>
        <div className="space-y-2">
            {todos.map(todo => (
                <TodoItem 
                    key={todo.id} 
                    todo={todo} 
                    onCompletedChange={onCompletedChange}
                    onRemove={onRemove}
                />
            ))}
        </div>
        {todos.length === 0 && (
            <p className="text-center text-sm text-gray-400">No todos found</p>
        )}
        </>
    );
}