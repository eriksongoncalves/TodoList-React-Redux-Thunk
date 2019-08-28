
export const addTask = task => {
    return {
        type: "ADD_TASK",
        payload: {
            task
        }
    }
}


export const getTasks = tasks => {
    return {
        type: "GET_TASKS",
        payload: {
            tasks
        }
    }
}

export const removeTask = id => {
    return {
        type: "REMOVE_TASK",
        payload: {
            id
        }
    }
}

export const doneTask = id => {
    return {
        type: "DONE_TASK",
        payload: {
            id
        }
    }
}