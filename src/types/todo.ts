export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

export function createTodo(id: number, title: string, completed: boolean): Todo {
    return {
        id,
        title,
        completed
    };
}

export function sortTodods(todos : Todo[]): Todo[] {
    return todos.sort((a, b) => {
        if (a.completed && !b.completed) {
            return 1;
        }
        if (!a.completed && b.completed) {
            return -1;
        }
        return b.id - a.id;
    });
}