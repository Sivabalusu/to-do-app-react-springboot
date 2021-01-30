import React from 'react'

export default function ListTodo() {

    const todos = [
        {id:1, description: 'Learn React', done:'no', targetDate:new Date()},
        {id:2, description: 'Learn Spring boot', done:'no', targetDate:new Date()}
    ];
    return (
        <div>
                 <h1>List Todos</h1>
                 <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>description</th>
                                <th>done</th>
                                <th>targetDate</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            todos.map (
                                todo =>
                                    <tr>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.done}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                    </tr>
                            )
                            }
                        </tbody>
                    </table>
                 </div>

        </div>
    )
}
