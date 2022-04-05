import * as React from "react";
import {useSelector, useDispatch} from "react-redux";
import {RootState} from "../store";

import {counterActions} from "../store/counter-slice";
import styles from "./Counter.module.css";

const Counter = () => {
    // Always add this line to be able to dispatch actions for the reducers
    const dispatch = useDispatch();
    // useSelector subscribes your Component to the part of the redux state you're interested in
    // Therefore, you are ensured that you use the latest state snapshot
    const counter = useSelector((state: RootState) => state.counter.counter);
    const show = useSelector((state: RootState) => state.counter.showCounter);

    const incrementHandler = () => {
        // Tells the counterSlice's reducer which method to use (no payload in this case)
        dispatch(counterActions.increment());
    };

    const increaseHandler = () => {
        // { type: SOME_UNIQUE_IDENTIFIER, payload: 10 } is the object return by increase(10)
        // This object is then forwarded to the counterSlice allowing it to choose the correct method
        dispatch(counterActions.increase(10));
    };

    const decrementHandler = () => {
        dispatch(counterActions.decrement());
    };

    const toggleCounterHandler = () => {
        dispatch(counterActions.toggleCounter());
    };

    return (
        <main className={styles.counter}>
            <h1>Redux Counter</h1>
            {show && <div className={styles.value}>{counter}</div>}
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={increaseHandler}>Increase by 10</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
