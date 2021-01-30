import React from 'react'

export default function ListTodo() {

    const todos = [
        {id:1, description: 'Learn React'},
        {id:2, description: 'Learn Spring boot'}
    ];
    return (
        <div>
                 <h1>List Todos</h1>
                 <table>
                     <thead>
                         <tr>
                             <th>id</th>
                             <th>description</th>
                         </tr>
                     </thead>
                     <tbody>
                       {
                         todos.map (
                            todo =>
                                <tr>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                </tr>
                         )
                        }
                     </tbody>
                 </table>

        </div>
    )
}
