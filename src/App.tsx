import "./App.css";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import useTodos from "./hooks/todos";

function App() {

  const { todos, setTodoCompleted, addNewTodo, removeTodo } = useTodos();
  
  return (
    <main className="py-10 h-screen space-y-5">
        <h1 className="font-bold text-3xl text-center">Your Todos</h1>
        <div className="max-w-lg mx-auto bg-slate-100 rounded-xl p-5 space-y-6">
          <AddTodoForm onAdd={addNewTodo}/>
          <TodoList 
            todos={todos}
            onCompletedChange={setTodoCompleted} 
            onRemove={removeTodo}
          />
        </div>
    </main>
  );
}

export default App;