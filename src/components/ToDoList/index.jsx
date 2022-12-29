import React from "react";
import './style.css'
import { Button } from "../Button";


const data = [
    { id: 1, title: "Somth here" },
    { id: 2, title: "Somth here" },
    { id: 3, title: "Somth here" },
    { id: 4, title: "Somth here" },
    { id: 5, title: "Somth here" },
    { id: 5, title: "Somth here" },
    { id: 5, title: "Somth here" },
    { id: 5, title: "Somth here" },
    { id: 5, title: "Somth here" },
    { id: 5, title: "Somth here" },
]

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: data
        }
    }
    render() {
        return (
            <div className="container">
                <div className="wrapper">
                    <div className="navbar">
                        <h1 className="navbar-count">4 Tasks</h1>
                        <h1 className="navbar-count-remain">4 Remain</h1>
                    </div>
                    <div className="tasks">
                        <ul className="tasks-items">
                            {
                                this.state.tasks.map(v => {
                                    return (
                                        <li className="tasks-item">
                                            <label >
                                                <input type="checkbox" className="checkbox" />
                                                <h3 className="tasks_title">{v.title}</h3>
                                            </label>
                                            <Button>Delete</Button>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="footer">
                        <input type="text" className="add_input" />
                        <Button>Add</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ToDoList;