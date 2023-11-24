import React, { useEffect, useLayoutEffect, useReducer, useState } from "react";
import { Header } from '../Components/header';
import axios from "axios";

const call = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count - 1 }
        case 'reset':
            return { count: state.count = 0, arr: state.arr = true };
        default:
            return state;
    }
}

export const About = () => {

    const [arr, setArr] = useState();
    const [state, dispatch] = useReducer(call, { count: 0, arr: false });

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                setArr(response.data);
            })
            .catch((error) => {
                console.error(error.message);
            })

    }, []);

    useLayoutEffect(() => {
        console.log('useloayout effect');
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                setArr(response.data);
            })
            .catch((error) => {
                console.error(error.message);
            })

    }, []);

    return (
        <>
            <Header />
            <p className="display-5">{state.count} {state.arr ? 'hi' : 'Reset to 0'}</p>
            <button className="btn btn-primary" onClick={() => dispatch({ type: 'increment' })}>increment</button>
            <button className="btn btn-secondary" onClick={() => dispatch({ type: 'decrement' })}>decrement</button>
            <button className="btn btn-info" onClick={() => {
                dispatch({ type: 'reset' }); dispatch({ type: 'color' });
            }
            }>reset</button>
            <div className="container-lg text-center">
                <h1 className="display-3">About</h1>
                {arr && arr.map((users) => {
                    return <p key={users.id} className="lead">{users.name}</p>
                })}
            </div>
        </>
    )
}