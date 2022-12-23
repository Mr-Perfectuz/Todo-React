import React, { Component } from 'react'

export default class State extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            title: "Webbrain",
            username: "",
            data: [
                { id: 1, name: "React" },
                { id: 2, name: "HTML" },
                { id: 3, name: "JS" },
                { id: 4, name: "CSS" },
            ]
        }
    }


    render() {
        const increment = () => {
            this.setState({ count: this.state.count + 1 })
            console.log(this.state.count);
        }

        const decrement = () => {
            if (this.state.count > 0) {
                this.setState({ count: this.state.count - 1 })
            }
        }

        const onChange = (event) => {
            console.log(event.target.value);
            this.setState({ username: event.target.value })
        }

        const selectItem = (e) => {
            console.log(e.target.value, 'select')
        }
        const onCheck = (e) => {
            console.log(e.target.checked);
        }
        return (
            <div>
                <h1 onClick={increment}>Products {this.state.count}</h1>
                <h1>Title: {this.state.title}</h1>
                <h1>Username: {this.state.username}</h1>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
                <h1>==============================</h1>
                <input type="text" placeholder='title' onChange={onChange} />
                <select onChange={selectItem} name="" id="">
                    <option value="uzb">UZB</option>
                    <option value="ru">RU</option>
                    <option value="en">En</option>
                </select>

                {
                    this.state.data.map((v) => {
                        return (
                            <button>{v.name}</button>
                        )
                    })
                }
                <input type="checkbox" onChange={onCheck} />
            </div>
        )
    }
}
