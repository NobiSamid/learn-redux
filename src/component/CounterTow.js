import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {increase, decrease} from '../redux/actions/counterAction';

const CounterTow = () => {


    const count = useSelector(state => state.counterReducer.count)
    const dispatch = useDispatch() 
    return (
        <div>
            <h3>Count: {count}</h3>
            <button onClick={() => dispatch(increase(8))}>Increase</button>
            <button onClick={() => dispatch(decrease(3))}>Decrease</button>
        </div>
    );
};

export default CounterTow;