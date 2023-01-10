import React, { useReducer } from 'react'

export const UseReducer = () => {
    const [state, dispatch] = useReducer((state, action) => {
        console.log(state, action);
        switch (action.type) {
            case 'plus':
                return state + 1;
            case 'minus':
                return state - 1;
            default:
                return state;
        }

    }, 0)
    return (
        <div>
            <h1>UseReducer: {state}</h1>
            <button onClick={() => dispatch({ type: 'plus' })}>+</button>
            <button onClick={() => dispatch({ type: 'minus' })}>-</button>
        </div>
    )
}

export default UseReducer;
