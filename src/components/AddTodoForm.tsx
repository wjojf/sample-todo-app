import { useState } from "react";


interface AddTodoFormProps {
    onAdd: (title: string) => void;
}


function AddTodoForm({onAdd}: AddTodoFormProps) {

    const [inputValue, setInputValue] = useState("");
    
    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        if (!inputValue.trim()) {
            alert("Please enter a todo");
            setInputValue("");
            return;
        }

        onAdd(inputValue);
    
        setInputValue("");
    }

    return (
        <form className="flex" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="What needs to be done?"
                className="rounded-s-md grow border border-gray-400 p-2"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button 
                type="submit" 
                className="w-16 bg-slate-900 text-white p-2 rounded-e-md"
            >
                Add
            </button>
        </form>
    );
}

export default AddTodoForm;