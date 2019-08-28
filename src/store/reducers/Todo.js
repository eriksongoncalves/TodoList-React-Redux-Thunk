const initialState = [];

export default function Todo(state = initialState, action) {

    switch (action.type) {
        case "GET_TASKS":
            return action.payload.tasks;
        case "ADD_TASK":
            return [...state, action.payload.task];
        case "REMOVE_TASK":
            return state.filter(task => task.id !== action.payload.id);
        case "DONE_TASK":
            return state.filter(task => {
                if (task.id === action.payload.id) {
                    task.done = !task.done
                }
                return task;
            })
        default:
            return state;
    }
}