import React, { useState } from "react";
import { data } from "../uttils/data";
import './style.css'



const ToDoList = () => {
    const [state, setState] = useState(data);
    const [select, selected] = useState('firstname');

    const onDelete = (id) => {
        const res = state.filter(value => value.id !== id);
        setState(res);
    }

    const onSearch = (e) => {
        const search = state.filter(value => value.firstname.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));
        setState(search);
        console.log(search);
    }

    const onSelect = (e) => {
        selected({ state: e.target.value });
    }

    return (
        <div className="container">
            <h1>ToDoList</h1>

            <input type="text" className="search" placeholder="Search " onChange={onSearch} />
            <select onChange={onSelect}>
                <option value="">Firstname</option>
                <option>LastName</option>
                <option>Username</option>
            </select>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Tel</th>
                        <th>Country</th>
                        <th>Province</th>
                        <th>District</th>
                        <th>
                            Update
                        </th>
                        <th>
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody >
                    {
                        state.map((v) => {
                            return (
                                <tr key={v.id} >
                                    <td>{v.id}</td>
                                    <td>{v.firstname}</td>
                                    <td>{v.lastname}</td>
                                    <td>{v.username}</td>
                                    <td>{v.email}</td>
                                    <td>{v.tel}</td>
                                    <td>{v.country}</td>
                                    <td>{v.province}</td>
                                    <td>{v.district}</td>
                                    <td ><button>Update</button></td>
                                    <td><button onClick={() => onDelete(v.id)}>Delete</button></td>
                                </tr>

                            )
                        })
                    }
                </tbody>
            </table>

        </div >
    )
}

export default ToDoList;