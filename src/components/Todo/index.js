import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import { Form, Container, Table } from './style';
import * as TodoActions from '../../store/actions/TodoAction';
import { todoFetch } from '../../thunks/todos';

function Todo({ tasks, addTask, removeTask, doneTask, todoFetch }) {
    const [taskInput, setTaskInput] = useState([]);

    useEffect(() => {
        todoFetch();
    }, [])

    const add = e => {
        e.preventDefault();

        addTask({
            id: Math.floor(Math.random() * 1000),
            description: taskInput,
            done: false
        });

        setTaskInput("");
    }

    return (
        <Container>
            <Form onSubmit={add}>
                <input
                    type="text"
                    placeholder="Digite a task"
                    value={taskInput}
                    onChange={e => setTaskInput(e.target.value)}
                />
                <button type="submit">Add</button>
            </Form>

            <Table>
                <thead>
                    <tr>
                        <th>Task</th>
                        <th colSpan="2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map(task => (
                            <tr key={task.id}>
                                <td>
                                    <a
                                        href={null}
                                        onClick={() => doneTask(task.id)}
                                        className={task.done ? "done" : ""}
                                    >
                                        {task.description}
                                    </a>
                                </td>
                                <td><button onClick={() => removeTask(task.id)}>Remove</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </Container>
    );
}

const mapStateToProps = state => ({
    tasks: state.tasks
})

const mapDispatchToProps = dispatch => bindActionCreators({ ...TodoActions, todoFetch }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Todo);