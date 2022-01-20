import {increase_value, decrease_value} from "../types";


export const increase = (a) => {
    return{
        type: increase_value,
        payLoad: a
    }
}

export const decrease = (a) =>{
    return{
        type:decrease_value,
        payLoad: a
    }
}