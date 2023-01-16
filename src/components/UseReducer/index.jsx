import React, { useReducer } from 'react'

const mock = [
    { id: 1, title: "olma" },
    { id: 2, title: "nok" },
    { id: 3, title: "behi" },
    { id: 4, title: "uzum" }
]

export const UseReducer = () => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'delete':
                let res = state.data.filter((value) => value.id !== action.payload.id)
                console.log(res, 'res ')
                return { ...state, data: res }
            case 'search':
                console.log(action.payload.e, "action");
                let searched = mock.filter(value => value.title.includes(action.payload.e))
                console.log(searched);
                return { ...state, data: searched }
            case 'add':
                console.log("action");
                let newItem = { id: state.data.length + 1, title: state.title }
                return
                console.log(searched);
                return { ...state, data: searched }
            default:
                return state;
        }
    }, { data: mock })
    return (
        <div>
            <h1>User Reducer:</h1>
            <input type="text" placeholder='Search...' onChange={(e) => dispatch({ type: 'search', payload: { e: e.target.value } })} />
            {
                state.data.map((value) => {
                    return (
                        <div key={value.id}>
                            {value.id} - {value.title}
                            <button onClick={() => dispatch({ type: 'delete', payload: { id: value.id } })}>Delete</button>
                            <button onClick={() => dispatch({ type: 'add', payload: { id: value.id } })}>Add</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default UseReducer;
