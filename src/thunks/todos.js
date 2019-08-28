import { getTasks } from '../store/actions/TodoAction';

export const todoFetch = () => {
    return dispatch => {
        fetch("http://www.mocky.io/v2/5d55c090350000b5b5087f80")
            .then(r => r.json())
            .then(data => {
                dispatch(getTasks(data))
            })
    }
}