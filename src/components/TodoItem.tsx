import { Trash2 } from "lucide-react";
import { Todo } from "../types/todo";

interface TodoItemProps {
    todo: Todo;   
    onCompletedChange: (id: number, completed: boolean) => void; 
    onRemove: (id: number) => void;
}

function TodoItem({todo, onCompletedChange, onRemove}: TodoItemProps) {
    return (
        <div className="flex items-center gap-1">
          <label className="flex grow items-center gap-2 border rounded-md p-2 border-gray-400 bg-white hover:bg-slate-50">
            <input 
                type="checkbox" 
                checked={todo.completed}
                onChange={(e) => onCompletedChange(todo.id, e.target.checked)}
                className="scale-125"
            />
            <span className={todo.completed ? "line-through text-gray-400" : ""}>
                {todo.title}
            </span>
          </label>
          <button className="p-2">
            <Trash2 size={20} onClick={() => onRemove(todo.id)} />
          </button>
        </div>
    )
}


export default TodoItem;