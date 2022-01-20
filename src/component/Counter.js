import React from 'react'
import {connect} from "react-redux";
import {increase, decrease} from "../redux/actions/counterAction";


const Counter = ({increase, decrease, count }) => {
    return (
        <div>
            <h3>Count: {count}</h3>
            <button onClick={() =>increase(5)}>Increase</button>
            <button onClick={() => decrease(1)}>Decrease</button>
        </div>
    )
}

const mapStateToProps = (state) =>({
    count: state.counterReducer.count 
})

export default connect(mapStateToProps, {increase, decrease})(Counter)